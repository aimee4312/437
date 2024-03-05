"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoConnect_1 = require("./mongoConnect");
const profiles_1 = __importDefault(require("./profiles"));
const songs_1 = __importDefault(require("./songs"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, mongoConnect_1.connect)("chromawave");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/hello", (req, res) => {
    res.send("Hello, World");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// Profile data
app.get("/api/profiles/:userid", (req, res) => {
    const { userid } = req.params;
    profiles_1.default
        .get(userid)
        .then((profile) => res.json(profile))
        .catch((err) => res.status(404).end());
});
app.post("/api/profiles", (req, res) => {
    const newProfile = req.body;
    profiles_1.default
        .create(newProfile)
        .then((profile) => res.status(201).send(profile))
        .catch((err) => res.status(500).send(err));
});
app.put("/api/profiles/:userid", (req, res) => {
    const { userid } = req.params;
    const newProfile = req.body;
    profiles_1.default
        .update(userid, newProfile)
        .then((profile) => res.json(profile))
        .catch((err) => res.status(404).end());
});
// Song data
app.get("/api/songs/:songName", (req, res) => {
    const { songName } = req.params;
    songs_1.default
        .get(songName)
        .then((song) => res.json(song))
        .catch((err) => res.status(404).end());
});
app.post("/api/songs", (req, res) => {
    const newSong = req.body;
    songs_1.default
        .create(newSong)
        .then((song) => res.status(201).send(song))
        .catch((err) => res.status(500).send(err));
});
app.put("/api/songs/:songName", (req, res) => {
    const { songName } = req.params;
    const newSong = req.body;
    songs_1.default
        .update(songName, newSong)
        .then((song) => res.json(song))
        .catch((err) => res.status(404).end());
});
