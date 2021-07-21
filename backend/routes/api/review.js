const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Business, Review } = require('../../db/models');

router.get('/', asyncHandler(async(req,res)=>{
    const reviews  = await Review.findAll();
    return res.json(reviews)
}))



module.exports = router;
