"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const songs_1 = __importDefault(require("./models/mongo/songs"));
function index() {
    return songs_1.default.find();
}
function get(songName) {
    return songs_1.default.find({ songName })
        .then((list) => list[0])
        .catch((err) => {
        throw `${songName} Not Found`;
    });
}
function create(song) {
    const p = new songs_1.default(song);
    return p.save();
}
function update(songName, song) {
    return new Promise((resolve, reject) => {
        songs_1.default.findOneAndUpdate({ songName }, song, {
            new: true,
        }).then((song) => {
            if (song)
                resolve(song);
            else
                reject("Failed to update song");
        });
    });
}
exports.default = { index, get, create, update };
