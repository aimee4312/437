import express from "express";
import { authenticateUser } from "../src/auth";
import profileRouter from "./profile";

const router = express.Router();

router.use(authenticateUser);
router.use("/profiles", profileRouter);