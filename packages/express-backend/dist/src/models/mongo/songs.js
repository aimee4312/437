"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const songSchema = new mongoose_1.Schema({
    songName: { type: String, required: true, trim: true },
    artist: { type: String, trim: true },
    album: { type: String, trim: true },
}, { collection: "songs" });
const songModel = (0, mongoose_1.model)("Songs", songSchema);
exports.default = songModel;
