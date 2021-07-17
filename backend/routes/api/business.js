const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Business } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
    const allBusiness = await Business.findAll();
    return res.json(allBusiness)
}))

module.exports = router;
