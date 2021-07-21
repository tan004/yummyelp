const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Business, Review } = require('../../db/models');

router.get('/', asyncHandler(async(req,res)=>{
    const reviews  = await Review.findAll({
        order: [['updatedAt','DESC']]
    });
    return res.json(reviews)
}))

router.put('/:reviewId', requireAuth,restoreUser, asyncHandler(async(req,res)=> {
    const reviewId = req.params.reviewId;

    const review = await Review.findByPk(reviewId)

    const { userId, businessId, rating, answer, liked } = req.body

    const updated = { userId, businessId, rating, answer, liked  };

    const updatedReview = await review.update(updated)
    return res.json(updatedReview);
}))

router.delete('/:reviewId', restoreUser,requireAuth, asyncHandler(async(req,res)=> {
    const reviewId = req.params.reviewId;
    const review = await Review.findByPk(reviewId)
    await review.destroy();

    return res.json(review.id)
}))

module.exports = router;
