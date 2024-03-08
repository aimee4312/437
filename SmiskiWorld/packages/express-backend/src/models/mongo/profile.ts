import { Schema, Model, Document, model } from "mongoose";
import { Profile } from "../profile";

const profileSchema = new Schema<Profile>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    password: { type: String, trim: true },
    smiski_owned: { type: String, trim: true },
    wishlist: { type: String, trim: true }
  },
  { collection: "user" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;