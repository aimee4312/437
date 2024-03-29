"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = __importDefault(require("./models/mongo/profile"));
function index() {
    return profile_1.default.find();
}
function get(userid) {
    return profile_1.default.find({ userid })
        .then((list) => list[0])
        .catch((err) => {
        throw `${userid} Not Found`;
    });
}
function create(profile) {
    const p = new profile_1.default(profile);
    return p.save();
}
function update(userid, profile) {
    return new Promise((resolve, reject) => {
        profile_1.default.findOneAndUpdate({ userid }, profile, {
            new: true,
        }).then((profile) => {
            if (profile)
                resolve(profile);
            else
                reject("Failed to update profile");
        });
    });
}
exports.default = { index, get, create, update };
