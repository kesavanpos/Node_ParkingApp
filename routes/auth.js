var express = require('express');
var router = express.Router();

const { login,refresh } = require('../controllers/authcontroller')

router.post('/login', function(req, res){
   login(req,res);
   console.log('login done');
});

router.post('/refresh',function(req,res){
    res.send('update route on things.');
});

//export this router to use in our index.js
module.exports = router;