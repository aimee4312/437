import express, { Request, Response } from "express";
import { Collections } from "ts-models";
import collections from "../collection";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const newCollection = req.body;

  collections
    .create(newCollection)
    .then((collection: Collections) => res.status(201).send(collection))
    .catch((err) => res.status(500).send(err));
});

router.get("/:collectionName", (req: Request, res: Response) => {
  const { collectionName } = req.params;

  collections
    .get(collectionName)
    .then((collections: Collections | undefined) => {
      if (!collections) throw "Not found";
      else res.json(collections);
    })
    .catch((err) => res.status(404).end());
});

router.put("/:collectionName", (req: Request, res: Response) => {
  const { collectionName } = req.params;
  const newCollection = req.body;

  collections
    .update(collectionName, newCollection)
    .then((collections: Collections) => res.json(collections))
    .catch((err) => res.status(404).end());
});

export default router;