"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const smiskiSchema = new mongoose_1.Schema({
    smiskiName: { type: String, required: true, trim: true },
    collections: { type: String, required: true, trim: true },
    special: { type: Boolean, trim: true },
    photo: { type: String, trim: true },
    bodyType: { type: String, trim: true },
    description: { type: String, trim: true },
    found: { type: String, trim: true },
    pose: { type: String, trim: true }
}, { collection: "smiski" });
const SmiskiModel = (0, mongoose_1.model)("Smiski", smiskiSchema);
exports.default = SmiskiModel;
