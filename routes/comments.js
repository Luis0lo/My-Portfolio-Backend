import express from 'express';
import { getAllComments } from '../models/comments.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
  const allComments = await getAllComments();
  // console.log(allComments);
  res.json({ message: 'Comments', payload: allComments });
});

export default router;
