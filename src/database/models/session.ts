import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Session model
interface Session extends Document {
  userId: mongoose.Types.ObjectId;
  token: string;
  createdAt: Date;
  updatedAt: Date;
  active : boolean
}

// Create the session schema
const sessionSchema = new Schema<Session>({
  userId: { type: Schema.Types.ObjectId, ref: 'user_collection', required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  active: {type : Boolean }
});

// Create the SessionCollection model using the schema
const SessionCollection = mongoose.model<Session>('session_collection', sessionSchema);

export default SessionCollection;
