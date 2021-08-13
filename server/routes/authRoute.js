const { check } = require('express-validator');
const { Router } = require('../authCase/authModule');
const router = new Router()
const { create } = require('../authCase/authController');

router.post('/',
    [
        check('mail', 'Must add a valid mail').isEmail(),
        check('password', 'Must add a valid password').not().isEmpty(),
    ],
    create.userLogIn);

module.exports = router