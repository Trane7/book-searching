const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes); // finish this function

module.exports = router;
