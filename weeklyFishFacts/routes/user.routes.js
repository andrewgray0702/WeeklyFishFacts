const express = require('express');
const router = express.Router();
let user = require("../models/user.models");

router.post('/login', (req, res)=>{
    user.login(req, res);
})

router.post('/signup', (req, res)=>{
    user.create(req, res);
})

router.delete('/delete', (req, res)=>{
    user.deleteUser(req, res);
})

module.exports = router;