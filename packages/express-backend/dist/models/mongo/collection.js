"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CollectionsSchema = new mongoose_1.Schema({
    series: { type: String, trim: true },
    figures: [String],
}, { collection: "collections" });
const CollectionsModel = (0, mongoose_1.model)("Collections ", CollectionsSchema);
exports.default = CollectionsModel;
