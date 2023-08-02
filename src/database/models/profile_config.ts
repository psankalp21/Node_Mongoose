import mongoose, { Document, Schema } from 'mongoose';

interface ProfileConfig extends Document {
  user_id: mongoose.Types.ObjectId;
  email_verification: boolean;
  phone_verification: boolean;
  private_profile: boolean;
}

const profileConfigSchema = new Schema<ProfileConfig>({
  user_id: { type: Schema.Types.ObjectId, ref: 'user_collection' },
  email_verification: { type: Boolean, default: false },
  phone_verification: { type: Boolean, default: false },
  private_profile: { type: Boolean, default: false },
});

const ProfileConfigCollection = mongoose.model<ProfileConfig>(
  'profile_config_collection',
  profileConfigSchema
);

export default ProfileConfigCollection;
