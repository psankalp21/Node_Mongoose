import mongoose, { Document, Schema } from 'mongoose';

interface Action extends Document {
  post_id: mongoose.Types.ObjectId;
  user_id: mongoose.Types.ObjectId;
  action: {
    action_type: string;
    action_content: string;
    action_date: Date;
  };
}

const actionSchema = new Schema<Action>({
  post_id: { type: Schema.Types.ObjectId, ref: 'post_collection' },
  user_id: { type: Schema.Types.ObjectId, ref: 'user_collection' },
  action: {
    action_type: { type: String },
    action_content: { type: String },
    action_date: { type: Date },
  },
});

const ActionCollection = mongoose.model<Action>('action_collection', actionSchema);

export default ActionCollection;
