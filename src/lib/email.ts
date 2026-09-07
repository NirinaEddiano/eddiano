import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER ?? "anoeddi84@gmail.com";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD ?? "xdei vklo crrk cqat";

type SendEmailOptions = {
  html: string;
  replyTo?: string;
  subject: string;
  text: string;
};

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  return transporter;
}

export async function sendEmail(options: SendEmailOptions) {
  await getTransporter().sendMail({
    from: `"Niryva" <${GMAIL_USER}>`,
    to: GMAIL_USER,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
