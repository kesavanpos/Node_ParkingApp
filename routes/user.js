var express = require('express');
var router = express.Router();

router.get('/users', function(req, res){
   res.send('GET route on things.');
});

router.post('/users', function(req, res){
   res.send('POST route on things.');
});

router.put('/users',function(req,res){
    res.send('update route on things.');
});

router.patch('/users',function(req,res){
    res.send('patch route on things.');
});

router.delete('/users',function(req,res){
    res.send('delete route on things.');
});

//export this router to use in our index.js
module.exports = router;