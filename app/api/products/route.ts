import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/webBuilder";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await dbConnect()
        const products = await Product.find({})
        return NextResponse.json(products)
    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}