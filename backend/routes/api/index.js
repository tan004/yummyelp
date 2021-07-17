const router = require('express').Router();

// GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require('./business.js');

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body})
});

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/business', businessRouter);

module.exports = router;
