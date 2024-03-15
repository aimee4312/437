import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profile";
import smiskiRouter from "./smiski";

const router = express.Router();

router.use(authenticateUser);
router.use("/profiles", profileRouter);
router.use("/smiskis", smiskiRouter);

export default router;