import express, { Request, Response } from "express";
import { Smiski } from "ts-models";
import smiskis from "../smiski";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
      const allSmiskis = await smiskis.index();
      res.json(allSmiskis);
  } catch (err) {
      console.error("Error fetching all Smiskis:", err);
      res.status(500).send(err);
  }
});


router.post("/", (req: Request, res: Response) => {
  const newSmiski = req.body;

  smiskis
    .create(newSmiski)
    .then((smiski: Smiski) => res.status(201).send(smiski))
    .catch((err) => res.status(500).send(err));
});

router.get("/:smiskiName", (req: Request, res: Response) => {
  const { smiskiName } = req.params;

  smiskis
    .get(smiskiName)
    .then((smiskiName: Smiski | undefined) => {
      if (!smiskiName) throw "Not found";
      else res.json(smiskiName);
    })
    .catch((err) => res.status(404).end());
});

router.put("/:smiskiName", (req: Request, res: Response) => {
  const { smiskiName } = req.params;
  const newSmiski = req.body;

  smiskis
    .update(smiskiName, newSmiski)
    .then((smiski: Smiski) => res.json(smiski))
    .catch((err) => res.status(404).end());
});

export default router;