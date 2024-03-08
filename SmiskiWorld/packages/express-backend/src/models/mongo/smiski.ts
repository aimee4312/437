import { Schema, Model, Document, model } from "mongoose";
import { Smiski } from "ts-models";

const smiskiSchema = new Schema<Smiski>(
  {
    smiskiName: { type: String, required: true, trim: true },
    collection: { type: String, required: true, trim: true },
    special: { type: Boolean, trim: true },
    photo: { type: String, trim: true }
  },
  { collection: "smiski" }
);

const SmiskiModel = model<Smiski>("Smiski", smiskiSchema);

export default SmiskiModel;