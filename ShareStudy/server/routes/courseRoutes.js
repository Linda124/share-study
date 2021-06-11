import express from 'express';
const router = express.Router();

import { getCourses, getCourseById } from "../controllers/courseControllers.js";

router.get("/", getCourses);
router.get("/:id", getCourseById);

export default router;