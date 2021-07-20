const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Business } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
    const allBusiness = await Business.findAll();
    return res.json(allBusiness);
}))

router.post('/', restoreUser, requireAuth, asyncHandler(async (req, res) => {

    const { ownerId, title, imgUrl, description, address, city, state, zipCode } = req.body;

    const business = await Business.create({
        ownerId,
        title, imgUrl, description, address, city, state, zipCode,
    })

    return res.json(business);
}))

router.put('/:id/edit', restoreUser, requireAuth, asyncHandler(async (req, res) => {
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

module.exports = router;
