import { Document } from "mongoose";
import { Smiski } from "ts-models";
import SmiskiModel from "./models/mongo/smiski";

function index(): Promise<Smiski[]> {
  return SmiskiModel.find();
}

function get(smiski: String): Promise<Smiski> {
  return SmiskiModel.find({ smiski })
    .then((list) => list[0])
    .catch((err) => {
      throw `${smiski} Not Found`;
    });
}

function create(smiski: Smiski): Promise<Smiski> {
  const p = new SmiskiModel(smiski);
  return p.save();
}

function update(userid: String, smiski: Smiski): Promise<Smiski> {
  return new Promise((resolve, reject) => {
    SmiskiModel.findOneAndUpdate({ userid }, smiski, {
      new: true,
    }).then((smiski) => {
      if (smiski) resolve(smiski);
      else reject("Failed to update smiski");
    });
  });
}

export default { index, get, create, update };