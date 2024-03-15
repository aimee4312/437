"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const smiski_1 = __importDefault(require("../smiski"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSmiskis = yield smiski_1.default.index();
        res.json(allSmiskis);
    }
    catch (err) {
        console.error("Error fetching all Smiskis:", err);
        res.status(500).send(err);
    }
}));
router.post("/", (req, res) => {
    const newSmiski = req.body;
    smiski_1.default
        .create(newSmiski)
        .then((smiski) => res.status(201).send(smiski))
        .catch((err) => res.status(500).send(err));
});
router.get("/:smiskiName", (req, res) => {
    const { smiskiName } = req.params;
    smiski_1.default
        .get(smiskiName)
        .then((smiskiName) => {
        if (!smiskiName)
            throw "Not found";
        else
            res.json(smiskiName);
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
