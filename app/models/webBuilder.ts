import mongoose, { Document, Schema } from "mongoose";
export interface IWebBuilder extends Document {
    texts: string;
    images: number;
    email: string;
}

const webBuilderSchema: Schema = new mongoose.Schema({
    email: { type: String },
    texts: { type: Object },
    images: { type: Object }
})

const WebBuilder = mongoose.models.WebBuilder || mongoose.model<IWebBuilder>("WebBuilder", webBuilderSchema)
export default WebBuilder