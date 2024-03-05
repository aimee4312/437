import { Document } from "mongoose";
import { Songs } from "ts-models";
import SongModel from "./models/mongo/songs";

function index(): Promise<Songs[]> {
  return SongModel.find();
}

function get(songName: String): Promise<Songs> {
  return SongModel.find({ songName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${songName} Not Found`;
    });
}

function create(song: Songs): Promise<Songs> {
  const p = new SongModel(song);
  return p.save();
}

function update(songName: String, song: Songs): Promise<Songs> {
  return new Promise((resolve, reject) => {
    SongModel.findOneAndUpdate({ songName }, song, {
      new: true,
    }).then((song) => {
      if (song) resolve(song);
      else reject("Failed to update song");
    });
  });
}

export default { index, get, create, update };