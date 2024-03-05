"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const songs_1 = __importDefault(require("../songs"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const newSong = req.body;
    songs_1.default
        .create(newSong)
        .then((songs) => res.status(201).send(songs))
        .catch((err) => res.status(500).send(err));
});
router.get("/:userid", (req, res) => {
    const { userid } = req.params;
    songs_1.default
        .get(userid)
        .then((songs) => {
        if (!songs)
            throw "Not found";
        else
            res.json(songs);
    })
        .catch((err) => res.status(404).end());
});
router.put("/:userid", (req, res) => {
    const { userid } = req.params;
    const newSong = req.body;
    songs_1.default
        .update(userid, newSong)
        .then((songs) => res.json(songs))
        .catch((err) => res.status(404).end());
});
exports.default = router;
