"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    password: { type: String, trim: true },
    avatar: { type: String, trim: true },
    smiski_owned: [String],
    num_smiski: { type: String, trim: true },
    wishlist: [String]
}, { collection: "user" });
const ProfileModel = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = ProfileModel;
