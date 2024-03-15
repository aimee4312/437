import { Document } from "mongoose";
import { Collections } from "ts-models";
import CollectionsModel from "./models/mongo/collection";

function index(): Promise<Collections[]> {
  return CollectionsModel.find();
}

function get(smiski: String): Promise<Collections> {
  return CollectionsModel.find({ smiski })
    .then((list) => list[0])
    .catch((err) => {
      throw `${smiski} Not Found`;
    });
}

function create(smiski: Collections): Promise<Collections> {
  const p = new CollectionsModel(smiski);
  return p.save();
}

function update(userid: String, smiski: Collections): Promise<Collections> {
  return new Promise((resolve, reject) => {
    CollectionsModel.findOneAndUpdate({ userid }, smiski, {
      new: true,
    }).then((collections) => {
      if (collections) resolve(collections);
      else reject("Failed to update collections");
    });
  });
}

export default { index, get, create, update };