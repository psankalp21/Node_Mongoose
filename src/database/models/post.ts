import mongoose, { Document, Schema } from 'mongoose';

interface Post extends Document {
  user_id: mongoose.Types.ObjectId;
  post: {
    post_content: string;
    post_caption: string;
    post_tags: string[];
  };
}

const postSchema = new Schema<Post>({
  user_id: { type: Schema.Types.ObjectId, ref: 'user_collection' },
  post: {
    post_content: { type: String, required: true },
    post_caption: { type: String },
    post_tags: [{ type: String }],
  },
});

const PostCollection = mongoose.model<Post>('post_collection', postSchema);

export default PostCollection;
