"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../auth");
const profile_1 = __importDefault(require("./profile"));
const router = express_1.default.Router();
router.use(auth_1.authenticateUser);
router.use("/profiles", profile_1.default);
exports.default = router;
