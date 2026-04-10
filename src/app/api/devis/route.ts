import { NextResponse } from "next/server";

import { escapeHtml, sendEmail } from "@/lib/email";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      description?: string;
      email?: string;
      name?: string;
      phone?: string;
      projectName?: string;
      serviceType?: string;
    };

    const name = body.name?.trim() || "";
    const projectName = body.projectName?.trim() || "";
    const serviceType = body.serviceType?.trim() || "A definir";
    const description = body.description?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";

    if (!name || !description || !email) {
      return NextResponse.json(
        { error: "Merci de renseigner le nom, le besoin et l'email." },
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
      "Nouvelle demande de devis",
      "",
      `Nom: ${name}`,
      `Projet: ${projectName || "Non renseigne"}`,
      `Service: ${serviceType}`,
      `Email: ${email}`,
      `Telephone: ${phone || "Non renseigne"}`,
      "",
      "Description:",
      description,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin-bottom:16px">Nouvelle demande de devis</h2>
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Projet:</strong> ${escapeHtml(projectName || "Non renseigne")}</p>
        <p><strong>Service:</strong> ${escapeHtml(serviceType)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telephone:</strong> ${escapeHtml(phone || "Non renseigne")}</p>
        <p><strong>Description:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(description)}</p>
      </div>
    `;

    await sendEmail({
      subject: `Demande de devis - ${name}`,
      replyTo: email,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Devis form error:", error);

    return NextResponse.json(
      { error: "Impossible d'envoyer la demande de devis pour le moment." },
      { status: 500 },
    );
  }
}
