import { NextResponse } from "next/server";

import { escapeHtml, sendEmail } from "@/lib/email";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      message?: string;
      name?: string;
      phone?: string;
      projectType?: string;
    };

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const projectType = body.projectType?.trim() || "Non precise";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Merci de remplir le nom, l'email et le message." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "L'adresse email saisie n'est pas valide." },
        { status: 400 },
      );
    }

    const text = [
      "Nouveau message depuis la page contact",
      "",
      `Nom: ${name}`,
      `Email: ${email}`,
      `Telephone: ${phone || "Non renseigne"}`,
      `Type de projet: ${projectType}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin-bottom:16px">Nouveau message depuis la page contact</h2>
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telephone:</strong> ${escapeHtml(phone || "Non renseigne")}</p>
        <p><strong>Type de projet:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `;

    await sendEmail({
      subject: `Contact site - ${name}`,
      replyTo: email,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 500 },
    );
  }
}
