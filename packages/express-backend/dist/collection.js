"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const collection_1 = __importDefault(require("./models/mongo/collection"));
function index() {
    return collection_1.default.find();
}
function get(smiski) {
    return collection_1.default.find({ smiski })
        .then((list) => list[0])
        .catch((err) => {
        throw `${smiski} Not Found`;
    });
}
function create(smiski) {
    const p = new collection_1.default(smiski);
    return p.save();
}
function update(userid, smiski) {
    return new Promise((resolve, reject) => {
        collection_1.default.findOneAndUpdate({ userid }, smiski, {
            new: true,
        }).then((collections) => {
            if (collections)
                resolve(collections);
            else
                reject("Failed to update collections");
        });
    });
}
exports.default = { index, get, create, update };
