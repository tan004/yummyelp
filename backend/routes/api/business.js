const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Business, Review } = require('../../db/models');

const validateform = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your business name with length between 3 to 100 characters.'),

    check('imgUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your cover picture Url!'),

    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your business description!'),

    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your business address!'),

    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please select the city where your business located at!'),

    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please select the state where your business located at!'),

    check('zipCode')
        .exists({ checkFalsy: true })
        .isLength({
            max: 6
        })
        .withMessage('Please provide the valid zipCode where your business located at!'),
    handleValidationErrors
]


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

router.get('/', asyncHandler(async (req, res) => {
    //SELECT "Businesses".title, (SELECT COUNT(*) FROM "Reviews" WHERE "Reviews"."businessId" = "Businesses".id)
    //AS TOT FROM "Businesses" ORDER BY TOT desc;
    //User.findAndCountAll({
    //   include: [
    //     { model: Profile, required: true }
    //  ],
    //  limit: 3
    // });

    const allBusiness = await Business.findAndCountAll({
        include: Review,
    });

    return res.json(allBusiness);
}))

router.post('/', restoreUser, requireAuth, validateform, asyncHandler(async (req, res,next) => {

    try{
    const { ownerId, title, imgUrl, description, address, city, state, zipCode } = req.body;
        const business = await Business.create({
            ownerId,
            title, imgUrl, description, address, city, state, zipCode,
        })
        return res.json(business);
    }catch(err){
        next(err)
    }
}))

router.put('/:id/edit', restoreUser, requireAuth, validateform, asyncHandler(async (req, res, next) => {
    try{
        const businessId = req.params.id

        const business = await Business.findByPk(businessId)

        const { ownerId, title, imgUrl, description, address, city, state, zipCode } = req.body

        const updated = {
            ownerId, title, imgUrl, description, address, city, state, zipCode
        }
        const updatedBusiness = await business.update(updated)
        //    const updated =  await Business.update(businessId, req.body)

        return res.json(updatedBusiness);
    }catch(err){
        next(err)
    }
}))

router.delete('/:id', restoreUser, requireAuth, asyncHandler(async (req, res,next) => {
    try{
        const businessId = req.params.id;
        const business = await Business.findByPk(businessId);
        await business.destroy();

        return res.json(business.id);
    }catch(err){
        next(err)
    }
}))

router.get('/:id', restoreUser, asyncHandler(async (req, res) => {
    const businessId = req.params.id;
    const current = await Business.findByPk(businessId);
    return res.json(current)
}))

router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const businessId = req.params.id;
    const reviews = await Review.findAll({
        include: User,
        where: { businessId },
        order: [['updatedAt','DESC']]
    })
    return res.json(reviews)
}))

router.post('/:id/reviews', restoreUser, requireAuth, validateReview, asyncHandler(async (req, res,next) => {
    try{

        const { userId, businessId, rating, answer, liked } = req.body

        const newReview = await Review.create({
            userId, businessId, rating, answer, liked
        })

        return res.json(newReview)
    }catch(err){
        next(err)
    }
}))



module.exports = router;
