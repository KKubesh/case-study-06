const express = require('express');
const dataObject = require('../data/item-data.json');

const router = express.Router();

router.get('/api/product', (req, res) => {
    
    res.send(dataObject);
    
})

module.exports = router