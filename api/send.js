/* eslint-disable no-undef */
import nodemailer from "nodemailer";

const FORM_SECRET = process.env.FORM_SECRET;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, message, honey, timestamp } = req.body;
  const secret = req.headers["x-secret-key"];

  if (secret !== FORM_SECRET) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }

  if (honey && honey.trim() !== "") {
    return res.status(400).json({ success: false, error: "Bot detected" });
  }

  if (!timestamp || Date.now() - timestamp < 5000) {
    return res.status(400).json({ success: false, error: "Too fast" });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: "${name}" <${email}>,
      to: GMAIL_USER,
      subject: "New Portfolio Contact Form Message",
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}