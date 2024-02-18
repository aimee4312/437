import { Schema, Model, Document, model } from "mongoose";
import { Songs } from "../songs";

const songSchema = new Schema<Songs>(
  {
    songName: { type: String, required: true, trim: true },
    artist: { type: String, trim: true },
    album: { type: String, trim: true },
  },
  { collection: "songs" }
);

const songModel = model<Songs>("Songs", songSchema);

export default songModel;