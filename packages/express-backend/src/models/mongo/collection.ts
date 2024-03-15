import { Schema, Model, Document, model } from "mongoose";
import { Collections } from "ts-models";

const CollectionsSchema = new Schema<Collections>(
  {
    series: { type: String, trim: true },
    figures: [String],
  },
  { collection: "collections" }
);

const CollectionsModel = model<Collections>(
  "Collections ",
  CollectionsSchema
);

export default CollectionsModel;