"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const collection_1 = __importDefault(require("../collection"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const newCollection = req.body;
    collection_1.default
        .create(newCollection)
        .then((collection) => res.status(201).send(collection))
        .catch((err) => res.status(500).send(err));
});
router.get("/:collectionName", (req, res) => {
    const { collectionName } = req.params;
    collection_1.default
        .get(collectionName)
        .then((collections) => {
        if (!collections)
            throw "Not found";
        else
            res.json(collections);
    })
        .catch((err) => res.status(404).end());
});
router.put("/:collectionName", (req, res) => {
    const { collectionName } = req.params;
    const newCollection = req.body;
    collection_1.default
        .update(collectionName, newCollection)
        .then((collections) => res.json(collections))
        .catch((err) => res.status(404).end());
});
exports.default = router;
