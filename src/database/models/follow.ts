import mongoose, { Document, Schema } from 'mongoose';

interface Follow extends Document {
  sender_id: mongoose.Types.ObjectId;
  receiver_id: mongoose.Types.ObjectId;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const followSchema = new Schema<Follow>({
  sender_id: { type: Schema.Types.ObjectId, ref: 'user_collection' },
  receiver_id: { type: Schema.Types.ObjectId, ref: 'user_collection' },
  status: { type: String, enum: ['accepted', 'rejected', 'pending'], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const FollowCollection = mongoose.model<Follow>('follow_collection', followSchema);

export default FollowCollection;
