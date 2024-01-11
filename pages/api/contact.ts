"use client";

import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function formHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { first_name, last_name, email, phone_number, comment } = req.body;
  const smtpUser = process.env.SMTP_EMAIL;
  const smtpPassword = process.env.SMTP_PASSWORD;

  // Forward the form data to multiple email addresses
  const toEmails = [
    "Lawrence@ChaiDefense.com",
    "Erica@ChaiDefense.com",
    "Jeff@ChaiDefense.com",
    "Julie@ChaiDefense.com",
    "Fred@ChaiDefense.com",
  ];
  const subject = "Chai Defense Form Submission";
  const body = `First Name: ${first_name}\nLast Name: ${last_name}\nEmail: ${email}\nPhone: ${phone_number}\nComment: ${comment}`;

  // Configure nodemailer to send emails
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  // Send emails
  try {
    await Promise.all(
      toEmails.map((to) => transporter.sendMail({ to, subject, text: body }))
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
