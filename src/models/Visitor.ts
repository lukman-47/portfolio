import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
  ip: String,
  country: { type: String, default: 'Unknown' },
  city: { type: String, default: 'Unknown' },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);
