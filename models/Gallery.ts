import mongoose, { Schema, model, models } from 'mongoose';

const GallerySchema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    altText: { type: String, required: true }, // SEO Key: Describe the image for Google
    width: { type: Number, default: 400 },    // Helps prevent "Layout Shift"
}, { timestamps: true });

const Gallery = models.Gallery || model("Gallery", GallerySchema);
export default Gallery;