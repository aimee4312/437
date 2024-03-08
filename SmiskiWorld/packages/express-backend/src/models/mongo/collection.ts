import { Schema, Model, Document, model } from "mongoose";
import { Collection } from "ts-models";

const CollectionSchema = new Schema<Collection>(
  {
    series: { type: String, trim: true },
    figures: [String],
  },
  { collection: "collection" }
);

const CollectionModel = model<Collection>(
  "Collection ",
  CollectionSchema
);

export default CollectionModel;