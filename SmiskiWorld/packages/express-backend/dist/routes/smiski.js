"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const smiski_1 = __importDefault(require("../smiski"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const newSmiski = req.body;
    smiski_1.default
        .create(newSmiski)
        .then((smiski) => res.status(201).send(smiski))
        .catch((err) => res.status(500).send(err));
});
router.get("/smiski/:smiskiName", (req, res) => {
    const { smiskiName } = req.params;
    smiski_1.default
        .get(smiskiName)
        .then((smiski) => {
        if (!smiski)
            throw "Not found";
        else
            res.json(smiski);
    })
        .catch((err) => res.status(404).end());
});
router.put("/:smiskiName", (req, res) => {
    const { smiskiName } = req.params;
    const newSmiski = req.body;
    smiski_1.default
        .update(smiskiName, newSmiski)
        .then((smiski) => res.json(smiski))
        .catch((err) => res.status(404).end());
});
exports.default = router;
