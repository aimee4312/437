import { Document } from "mongoose";
import { Collection } from "ts-models";
import CollectionModel from "./models/mongo/collection";

function index(): Promise<Collection[]> {
  return CollectionModel.find();
}

function get(smiski: String): Promise<Collection> {
  return CollectionModel.find({ smiski })
    .then((list) => list[0])
    .catch((err) => {
      throw `${smiski} Not Found`;
    });
}

function create(smiski: Collection): Promise<Collection> {
  const p = new CollectionModel(smiski);
  return p.save();
}

function update(userid: String, smiski: Collection): Promise<Collection> {
  return new Promise((resolve, reject) => {
    CollectionModel.findOneAndUpdate({ userid }, smiski, {
      new: true,
    }).then((collection) => {
      if (collection) resolve(collection);
      else reject("Failed to update collection");
    });
  });
}

export default { index, get, create, update };