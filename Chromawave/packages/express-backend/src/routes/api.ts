import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profile";

const router = express.Router();

//router.use(authenticateUser);
router.use("/profiles", profileRouter);

export default router;