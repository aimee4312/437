import express from "express";
import { authenticateUser } from "../src/auth";
import profileRouter from "./profiles";

const router = express.Router();

router.use(authenticateUser);
router.use("/profiles", profileRouter);

app.use("/api", router);