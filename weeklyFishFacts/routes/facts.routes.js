const express = require('express');
const router = express.Router();
let facts = require('../models/facts.models')

router.post('/suggest', (req, res)=>{
    facts.suggest(req, res);
})

module.exports = router;