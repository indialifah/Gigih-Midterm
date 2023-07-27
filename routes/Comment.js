import express from "express";
import { createComment, getCommentByVideoIdService } from "../services/Comment";

const router = express.Router();

router.post('/comments', createComment);
router.get('/videos/:video_id/comment', getCommentByVideoIdService);

export default router;