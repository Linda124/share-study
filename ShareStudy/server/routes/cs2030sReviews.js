import express from 'express';

import { getCS2030sReviews, createCS2030sReviews, updateCS2030sReview, deleteCS2030sReview, likeCS2030sReview } from '../controllers/cs2030sReviews.js'

const router = express.Router();

router.get('/', getCS2030sReviews);
router.post('/', createCS2030sReviews);
router.patch('/:id', updateCS2030sReview);
router.delete('/:id', deleteCS2030sReview);
router.patch('/:id/likeReview', likeCS2030sReview);

export default router;