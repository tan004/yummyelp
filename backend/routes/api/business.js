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
    .notEmpty()
    .withMessage('Please provide your business name with length between 3 to 100 characters.'),
    check('imgUrl')
    .notEmpty()
    .withMessage('Please provide your cover picture Url!'),
    check('description')
    .exists({checkFalsy: true})
    .notEmpty()
    .withMessage('Please provide your business description!'),
    check('address')
    .exists({checkFalsy: true})
    .notEmpty()
    .withMessage('Please provide your business address!'),
    check('city')
    .exists({checkFalsy: true})
    .notEmpty()
    .withMessage('Please select the city where your business located at!'),
    check('state')
    .exists({checkFalsy: true})
    .notEmpty()
    .withMessage('Please select the state where your business located at!'),
    check('zipCode')
    .exists({checkFalsy: true})
    .notEmpty()
    .withMessage('Please provide the valid zipCode where your business located at!'),
    handleValidationErrors
]


router.get('/', asyncHandler(async (req, res) => {
    const allBusiness = await Business.findAll();
    return res.json(allBusiness);
}))

router.post('/', restoreUser, requireAuth, validateform, asyncHandler(async (req, res) => {

    const { ownerId, title, imgUrl, description, address, city, state, zipCode } = req.body;

    const business = await Business.create({
        ownerId,
        title, imgUrl, description, address, city, state, zipCode,
    })

    return res.json(business);
}))

router.put('/:id/edit', restoreUser, requireAuth, validateform, asyncHandler(async (req, res) => {
    const businessId = req.params.id

    const business = await Business.findByPk(businessId)

    const {ownerId, title, imgUrl, description, address, city, state, zipCode} = req.body

    const updated = {
        ownerId, title, imgUrl, description, address, city, state, zipCode
    }
    const updatedBusiness = await business.update(updated)
//    const updated =  await Business.update(businessId, req.body)
    return res.json(updatedBusiness);
}))

router.delete('/:id', restoreUser,requireAuth, asyncHandler(async(req, res) => {
    const businessId = req.params.id;
    const business = await Business.findByPk(businessId);
    await business.destroy();

    return res.json(business.id);
}))

router.get('/:id', restoreUser, asyncHandler(async(req,res)=> {
    const businessId = req.params.id;
    const current = await Business.findByPk(businessId);
    return res.json(current)
}))

router.get('/:id/reviews', asyncHandler(async(req, res) => {
    const businessId = req.params.id;
    const reviews = await Review.findAll({
        where: {businessId}
    })
    return res.json(reviews)
}) )

router.post('/:id/reviews',restoreUser,requireAuth, asyncHandler(async(req,res)=> {
    const { userId, businessId, rating, answer, liked } = req.body

    const newReview = await Review.create({
        userId, businessId, rating, answer, liked
    })
    return res.json(newReview)
}))


module.exports = router;
