import express from 'express';

import { getCS2030sReviews, createCS2030sReviews, updateCS2030sReview, deleteCS2030sReview, likeCS2030sReview } from '../controllers/cs2030sReviews.js'

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCS2030sReviews);
router.post('/', auth, createCS2030sReviews);
router.patch('/:id', auth, updateCS2030sReview);
router.delete('/:id', auth, deleteCS2030sReview);
router.patch('/:id/likeReview', auth, likeCS2030sReview);

export default router;