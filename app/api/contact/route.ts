import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
    try {
        await dbConnect();
        const data = await req.json();

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true,
            port: 465,
            auth: {
                user: "ayodejiamzat@gmail.com",
                pass: "hbjkrsrxpmxtalyo",
            },
        });

        let mailOptions = {
            from: `${data.name} <${process.env.MAIL}>`,
            to: data.to,
            subject: data.subject,
            text: `
                email: ${data.email}
                message: ${data.message}
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            status: "ok",
            success: true,
        }, { status: 200 });
    } catch (error: any) {
        // console.error("Error in POST request:", error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
};