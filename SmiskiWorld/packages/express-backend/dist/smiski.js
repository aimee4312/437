"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const smiski_1 = __importDefault(require("./models/mongo/smiski"));
function index() {
    return smiski_1.default.find();
}
function get(smiski) {
    return smiski_1.default.find({ smiski })
        .then((list) => list[0])
        .catch((err) => {
        throw `${smiski} Not Found`;
    });
}
function create(smiski) {
    const p = new smiski_1.default(smiski);
    return p.save();
}
function update(userid, smiski) {
    return new Promise((resolve, reject) => {
        smiski_1.default.findOneAndUpdate({ userid }, smiski, {
            new: true,
        }).then((smiski) => {
            if (smiski)
                resolve(smiski);
            else
                reject("Failed to update smiski");
        });
    });
}
exports.default = { index, get, create, update };
