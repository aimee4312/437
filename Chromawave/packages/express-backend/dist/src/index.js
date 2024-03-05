"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path = __importStar(require("path"));
const promises_1 = __importDefault(require("node:fs/promises"));
const profiles_1 = __importDefault(require("./profiles"));
const songs_1 = __importDefault(require("./songs"));
const mongoConnect_1 = require("./mongoConnect");
//import { loginUser, registerUser } from "auth";
const api_1 = __importDefault(require("../routes/api"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credential_1 = __importDefault(require("credential"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, mongoConnect_1.connect)("chromawave");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const frontend = "lit-frontend";
let cwd = process.cwd();
let dist;
let indexHtml;
try {
    indexHtml = require.resolve(frontend);
    dist = path.dirname(indexHtml.toString());
}
catch (error) {
    console.log(`Could not resolve ${frontend}:`, error.code);
    dist = path.resolve(cwd, "..", frontend, "dist");
    indexHtml = path.resolve(dist, "index.html");
}
console.log(`Serving ${frontend} from`, dist);
if (dist)
    app.use(express_1.default.static(dist.toString()));
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
app.use("/app", (req, res) => {
    if (!indexHtml) {
        res
            .status(404)
            .send(`Not found; ${frontend} not available, running in ${cwd}`);
    }
    else {
        promises_1.default.readFile(indexHtml, { encoding: "utf8" }).then((html) => res.send(html));
    }
});
// login
function generateAccessToken(username) {
    return new Promise((resolve, reject) => {
        if (!process.env.TOKEN_SECRET) {
            reject("TOKEN_SECRET environment variable is not defined.");
            return;
        }
        jsonwebtoken_1.default.sign({ username: username }, process.env.TOKEN_SECRET, { expiresIn: "1d" }, (error, token) => {
            if (error)
                reject(error);
            else
                resolve(token);
        });
    });
}
app.post("/login", (req, res) => {
    const { username, pwd } = req.body; // from form 
    if (!username || !pwd) {
        res.status(400).send("Bad request: Invalid input data.");
    }
    else {
        credential_1.default
            .verify(username, pwd)
            .then((goodCreds) => generateAccessToken(goodCreds.username))
            .then((token) => res.status(200).send({ token: token }))
            .catch((error) => res.status(401).send("Unauthorized"));
    }
});
function authenticateUser(req, res, next) {
    const authHeader = req.headers["authorization"];
    //Getting the 2nd part of the auth header (the token) 
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
        res.status(401).end();
    else {
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
            if (decoded)
                next();
            else
                res.status(401).end();
        });
    }
}
exports.authenticateUser = authenticateUser;
// app.post("/signup", registerUser);
app.use("/api", api_1.default);