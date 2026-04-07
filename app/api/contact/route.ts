import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  investmentAmount: z.string().min(1),
  message: z.string().min(20),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, investmentAmount, message } = parsed.data;

    // Send email using credentials from environment variables ONLY
    // Credentials are NEVER exposed to the frontend
    const emailHost = process.env.EMAIL_SERVER_HOST;
    const emailPort = process.env.EMAIL_SERVER_PORT;
    const emailUser = process.env.EMAIL_SERVER_USER;
    const emailPass = process.env.EMAIL_SERVER_PASSWORD;
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO || "ir@jdienergypartners.com";

    // To enable email sending in production:
    // 1. Install nodemailer: npm install nodemailer @types/nodemailer
    // 2. Set environment variables: EMAIL_SERVER_HOST, EMAIL_SERVER_PORT,
    //    EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, EMAIL_FROM
    // 3. Uncomment the nodemailer integration below
    //
    // Example integration (server-side only; credentials never reach the browser):
    // if (emailHost && emailUser && emailPass) {
    //   const nodemailer = require("nodemailer");
    //   const transporter = nodemailer.createTransport({
    //     host: emailHost, port: parseInt(emailPort || "587"),
    //     auth: { user: emailUser, pass: emailPass },
    //   });
    //   await transporter.sendMail({ from: emailFrom, to: emailTo,
    //     subject: `New Inquiry from ${name}`, text: message });
    // }

    if (process.env.NODE_ENV === "development") {
      console.log("[Contact Form] New submission:", {
        name,
        email,
        phone: phone || "(not provided)",
        investmentAmount,
        message,
        emailConfigured: !!(emailHost && emailUser && emailPass),
        wouldSendTo: emailTo,
      });
    }

    return NextResponse.json(
      { success: true, message: "Your message has been received. We will be in touch shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
