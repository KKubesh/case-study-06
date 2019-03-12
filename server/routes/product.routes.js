import dataObject from '../data/item-data.json'
const express = require('express');

const router = express.Router();

router.get('/api/product', (req, res) => {
    
    res.send(dataObject);
    
})