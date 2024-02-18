import express, { Request, Response } from "express";
import cors from "cors";
import { connect } from "./mongoConnect";
import profiles from "./profiles";
import songs from "./songs";
import { Profile } from "./models/profile";
import { Songs } from "./models/songs";

const app = express();
const port = process.env.PORT || 3000;

connect("chromawave");
app.use(cors());
app.use(express.json());

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
