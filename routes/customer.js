var express = require('express');
var router = express.Router();
const { getCustomer,getCustomerById } = require('../controllers/customercontroller');


router.get('/customer',(req,res) => {
    getCustomer(req,res);
})

router.get('/customerBy')