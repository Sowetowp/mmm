import dbConnect from "@/app/lib/dbConnect"
import WebBuilder from "@/app/models/webBuilder"
import { NextResponse } from "next/server"

interface webTypes {
    _id: string;
    email: string;
    texts: string;
    images: string;
}
export const POST = async (req: Request) => {
    try {
        await dbConnect()
        const data = await req.json()
        const web: webTypes | null = await WebBuilder.findOne({ _id: data.id }).lean()

        if (!web) {
            return NextResponse.json({
                status: "error",
                message: "No document found for the provided email.",
            }, { status: 404 });
        }

        return NextResponse.json({
            status: "ok",
            message: "Success",
            data: {
                id: web._id,
                email: web.email,
                texts: web.texts,
                images: web.images,
            }
        }, { status: 200 })
    } catch (error: any) {
        console.error('Error in POST request:', error);
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}