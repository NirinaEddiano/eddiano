import { NextResponse } from "next/server";

import { escapeHtml, sendEmail } from "@/lib/email";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
    };

    const email = body.email?.trim() || "";

    if (!email) {
      return NextResponse.json(
        { error: "Merci de renseigner votre email." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Merci de saisir une adresse email valide." },
        { status: 400 },
      );
    }

    const text = [
      "Nouvelle inscription depuis le footer",
      "",
      `Email: ${email}`,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin-bottom:16px">Nouvelle inscription depuis le footer</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      </div>
    `;

    await sendEmail({
      subject: "Nouvel email capture depuis le footer",
      replyTo: email,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter form error:", error);

    return NextResponse.json(
      { error: "Impossible d'envoyer cet email pour le moment." },
      { status: 500 },
    );
  }
}
