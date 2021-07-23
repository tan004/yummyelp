const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Business, Review } = require('../../db/models');



const validateReview = [
    check('rating')
        .exists({ checkFalsy: true })
        .isFloat({ min: 1, max: 5 })
        .withMessage('Please provide an overall rating for the business. (1 - 5, ex: 3.5) '),

    check('answer')
        .exists({ checkFalsy: true })
        .withMessage(`Please describe what you like or what you don't like for this business.`),
    handleValidationErrors
]


router.get('/', asyncHandler(async(req,res)=>{
    const reviews  = await Review.findAll({
        order: [['updatedAt','DESC']]
    });
    return res.json(reviews)
}))

router.put('/:reviewId', restoreUser, requireAuth, validateReview, asyncHandler(async(req,res,next)=> {
  try{
      const reviewId = req.params.reviewId;

      const review = await Review.findByPk(reviewId)

      const { userId, businessId, rating, answer, liked } = req.body

      const updated = { userId, businessId, rating, answer, liked  };

      const updatedReview = await review.update(updated)
      return res.json(updatedReview);
  }catch(err){
      next(err)
  }
}))

router.delete('/:reviewId', restoreUser,requireAuth, asyncHandler(async(req,res,next)=> {3
    try{
        const reviewId = req.params.reviewId;
        const review = await Review.findByPk(reviewId)
        await review.destroy();

        return res.json(review.id)
    }catch(err){
        next(err)
    }
}))

module.exports = router;
