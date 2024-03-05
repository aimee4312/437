import express, { Request, Response } from "express";
import { Songs } from "ts-models";
import songs from "../songs";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const newSong = req.body;

  songs
    .create(newSong)
    .then((songs: Songs) => res.status(201).send(songs))
    .catch((err) => res.status(500).send(err));
});

router.get("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  songs
    .get(userid)
    .then((songs: Songs | undefined) => {
      if (!songs) throw "Not found";
      else res.json(songs);
    })
    .catch((err) => res.status(404).end());
});

router.put("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newSong = req.body;

  songs
    .update(userid, newSong)
    .then((songs: Songs) => res.json(songs))
    .catch((err) => res.status(404).end());
});

export default router;