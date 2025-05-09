const express = require("express");
const router = express.Router();
const { login } = require('../controller/authController');
const { signup  } = require("../controller/registerController");

router.post('/login', login);
router.post('/singup', signup );

module.exports = router;