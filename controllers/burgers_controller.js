var db = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req,res) {
  db.Burger.findAll({
  }).then(function(burger_data){
    res.render('index', {
      burger_data
    }); 
  })
})

router.post('/update', function(req,res){
  console.log(req.body);
  db.Burger.update(req.body,
    {
      where: {
        id: req.body.id
    }
  }).then(function() {
    res.redirect('/');
  });

});

router.post('/create', function(req,res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})

module.exports = router;