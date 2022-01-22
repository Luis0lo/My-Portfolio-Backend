import express from 'express';
import {
  createNewComment,
  deleteCommentById,
  getAllComments,
  updateCommentById,
} from '../models/comments.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
  const allComments = await getAllComments();
  res.status(200).json({ payload: allComments });
});

router.post('/', async (req, res, next) => {
  const newComment = await createNewComment(req.body);
  res.status(201).json({ payload: newComment });
});

router.put('/:id', async (req, res, next) => {
  const updatedComment = await updateCommentById(req.body, req.params);
  res.status(201).json({ payload: updatedComment });
});

router.delete('/:id', async (req, res, next) => {
  const deletedComment = deleteCommentById(req.params);
  res.status(204).json({ payload: deletedComment });
});

export default router;
