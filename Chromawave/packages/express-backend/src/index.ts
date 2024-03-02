import express, { Request, Response } from "express";
import cors from "cors";
import * as path from "path";
import fs from "node:fs/promises";
import { PathLike } from "node:fs";
import profiles from "./profiles";
import songs from "./songs";
import { connect } from "./mongoConnect";
import { Profile } from "./models/profile";
import { Songs } from "./models/songs";
import { loginUser, registerUser } from "auth";
import apiRouter from "../routes/api";

const app = express();
const port = process.env.PORT || 3000;

connect("chromawave");
app.use(cors());
app.use(express.json());
const frontend = "lit-frontend";
let cwd = process.cwd();
let dist: PathLike | undefined;
let indexHtml: PathLike | undefined;

try {
  indexHtml = require.resolve(frontend);
  dist = path.dirname(indexHtml.toString());
} catch (error: any) {
  console.log(`Could not resolve ${frontend}:`, error.code);
  dist = path.resolve(cwd, "..", frontend, "dist");
  indexHtml = path.resolve(dist, "index.html");
}

console.log(`Serving ${frontend} from`, dist);

if (dist) app.use(express.static(dist.toString()));

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// Profile data
app.get("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  profiles
    .get(userid)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

app.post("/api/profiles", (req: Request, res: Response) => {
  const newProfile = req.body;

  profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
});

app.put("/api/profiles/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newProfile = req.body;

  profiles
    .update(userid, newProfile)
    .then((profile: Profile) => res.json(profile))
    .catch((err) => res.status(404).end());
});

// Song data
app.get("/api/songs/:songName", (req: Request, res: Response) => {
  const { songName } = req.params;

  songs
    .get(songName)
    .then((song: Songs) => res.json(song))
    .catch((err) => res.status(404).end());
});

app.post("/api/songs", (req: Request, res: Response) => {
  const newSong = req.body;

  songs
    .create(newSong)
    .then((song: Songs) => res.status(201).send(song))
    .catch((err) => res.status(500).send(err));
});

app.put("/api/songs/:songName", (req: Request, res: Response) => {
  const { songName } = req.params;
  const newSong = req.body;

  songs
    .update(songName, newSong)
    .then((song: Songs) => res.json(song))
    .catch((err) => res.status(404).end());
});

app.use("/app", (req, res) => {
  if (!indexHtml) {
    res
      .status(404)
      .send(
        `Not found; ${frontend} not available, running in ${cwd}`
      );
  } else {
    fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
      res.send(html)
    );
  }
});
// login
app.post("/login", loginUser);
app.post("/signup", registerUser);
app.use("/api", apiRouter);
