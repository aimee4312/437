import express from "express";
import profileRouter from "./profile";
import songsRouter from "./saved-songs";

const router = express.Router();

//router.use(authenticateUser);
router.use("/profiles", profileRouter);
router.use("/saved-songs", songsRouter);

export default router;