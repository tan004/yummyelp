const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser,requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Business } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
    const allBusiness = await Business.findAll();
    return res.json(allBusiness);
}))

router.post('/', restoreUser, requireAuth, asyncHandler(async(req, res)=>{

    const { ownerId, title, imgUrl, description,address,city,state,zipCode } = req.body;

    const business = await Business.create({
        ownerId,
        title, imgUrl, description,address,city,state,zipCode,
    })

    return res.json({business});
}))

module.exports = router;
