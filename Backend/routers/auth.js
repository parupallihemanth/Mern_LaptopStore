const express = require('express');
const { check, validationResult} = require('express-validator')
const router = express.Router();

const { signUp, signIn, signOut } = require('../controllers/auth')

router.post('/signup',
[ 
    check('name', "Name should be greater than 3 characters").isLength({min : 3}),
    check('email', "Email required").isEmail(),
    check('password', "Password should be greater than 4 characters").isLength({min:4})


], signUp);



router.post('/signin', signIn)
router.get('/signout', signOut)









module.exports = router