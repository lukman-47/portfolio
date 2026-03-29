import mongoose, { Schema, Document } from 'mongoose';

export interface ICertificate extends Document {
  name: string;
  image?: string;
  provider: string; // e.g. Coursera, AWS
}

const CertificateSchema: Schema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  provider: { type: String, required: true },
});

export default mongoose.models.Certificate || mongoose.model<ICertificate>('Certificate', CertificateSchema);
