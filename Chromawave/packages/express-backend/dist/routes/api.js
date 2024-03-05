"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_1 = __importDefault(require("./profile"));
const saved_songs_1 = __importDefault(require("./saved-songs"));
const router = express_1.default.Router();
//router.use(authenticateUser);
router.use("/profiles", profile_1.default);
router.use("/saved-songs", saved_songs_1.default);
exports.default = router;
