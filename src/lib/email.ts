import "server-only";

import path from "node:path";
import { createRequire } from "node:module";

type SendEmailOptions = {
  html: string;
  replyTo?: string;
  subject: string;
  text: string;
};

type MailerModule = {
  createTransport: (options: {
    auth: { pass: string; user: string };
    host: string;
    port: number;
    secure: boolean;
  }) => {
    sendMail: (message: {
      from: string;
      html: string;
      replyTo?: string;
      subject: string;
      text: string;
      to: string;
    }) => Promise<unknown>;
  };
};

let transporter: ReturnType<MailerModule["createTransport"]> | null = null;

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function loadMailer(): MailerModule {
  const requireFromRoot = createRequire(path.join(process.cwd(), "package.json"));

  try {
    return requireFromRoot("nodemailer") as MailerModule;
  } catch {
    return requireFromRoot(
      path.join(process.cwd(), ".mail-runtime", "node_modules", "nodemailer"),
    ) as MailerModule;
  }
}

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const mailer = loadMailer();
  const user = getRequiredEnv("GMAIL_USER");
  const pass = getRequiredEnv("GMAIL_APP_PASSWORD").replace(/\s+/g, "");

  transporter = mailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

export async function sendEmail(options: SendEmailOptions) {
  const user = getRequiredEnv("GMAIL_USER");
  const recipient = process.env.FORM_RECIPIENT || user;

  await getTransporter().sendMail({
    from: `"Eddiano.dev" <${user}>`,
    to: recipient,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
