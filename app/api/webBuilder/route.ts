import { deleteImagesFromCloudinary, uploadImagesToCloudinary } from "@/app/lib/cloudinary";
import dbConnect from "@/app/lib/dbConnect";
import WebBuilder from "@/app/models/webBuilder";
import { Document } from "mongoose";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import path from "path";

interface Images {
    [key: string]: string;
}

interface newImagesType {
    [key: string]: {
        id: string;
        url: string;
    };
}

interface webTypes {
    email: string;
    texts?: object;
    images?: Images;
}

interface webTypes2 {
    email: string;
    texts?: object;
    images?: newImagesType;
}
interface WebBuilderDocument extends webTypes2, Document { }

export const POST = async (req: Request) => {
    try {
        await dbConnect()
        let newImages: newImagesType = {}
        const data: webTypes = await req.json();
        for (const key in data.images) {
            const uploadedImage: any = await uploadImagesToCloudinary(data.images[key]);
            newImages[key] = { id: uploadedImage.public_id, url: uploadedImage.url }
        }
        const webExist = await WebBuilder.findOne({ email: data.email }) as WebBuilderDocument | null;
        if (webExist) {
            let toDelete = [];
            for (const key in webExist.images) {
                toDelete.push(webExist.images[key])
            }
            const deletedImages = await deleteImagesFromCloudinary(toDelete)
            webExist.email = data.email || webExist.email;
            webExist.texts = data.texts || webExist.texts;
            webExist.images = newImages || webExist.images;
            const updated = await webExist.save();
            return NextResponse.json({
                status: "ok",
                message: "Updated",
                data: updated
            })
        } else {
            const newWeb = await WebBuilder.create({
                email: data.email,
                texts: data.texts,
                images: newImages
            })
            if (!newWeb) {
                throw new Error("Something went wrong")
            }
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                secure: true,
                port: 465,
                auth: {
                    user: "ayodejiamzat@gmail.com",
                    pass: "hbjkrsrxpmxtalyo",
                },
            });

            let mailOptions = ({
                from: `"Mal!k" <${process.env.MAIL}>`,
                to: data.email,
                subject: "Welcome to Your New Portfolio Website!",
                html: `
                    <body style="margin: 0; padding: 0; ">
                        <div
                            style="background-repeat: no-repeat; background-position: center; background-size: contain; font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol, 'Noto Color Emoji';  ">
                            <div style="padding: 20px; background-color: #fff;">
                                <p>Dear ${newWeb.texts.navData || "User"},</p>
                                <p style="color: black; font-size: 16px;">
                                    Thank you for choosing our web builder to create your portfolio! We're thrilled to have you on board and
                                    can't wait for you to showcase your talents to the world.
                                    <br><br>
                                    Your new website is live and ready to be explored! You can view it at the following link:
                                    <br><br>
                                    <a href="https://admirable-croissant-3aaba1.netlify.app/${newWeb._id}">Portfolio</a>
                                    <br><br>
                                    If you have any questions or need assistance, feel free to reach out. We're here to help you make the
                                    most of your new online presence.
                                    <br><br>
                                    Thank you again for trusting us with your portfolio. We wish you the best on your creative journey!
                                    <br><br>
                                    Warm regards,
                                    <br>
                                    Abdulmalik Amzat
                                </p>
                            </div>
                        </div>
                    </body>
                `
            })

            await transporter.sendMail(mailOptions)

            return NextResponse.json({ status: "ok", message: "Posted", data: newWeb }, { status: 200 });
        }
    } catch (error: any) {
        console.error('Error in POST request:', error);
        return NextResponse.json({ error: error }, { status: 400 })
    }
}