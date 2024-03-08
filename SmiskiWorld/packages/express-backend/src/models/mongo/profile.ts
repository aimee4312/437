import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "ts-models";

const profileSchema = new Schema<Profile>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    password: { type: String, trim: true },
    smiski_owned: [String],
    num_smiski: { type: String, trim: true },
    wishlist: [String]
  },
  { collection: "user" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;