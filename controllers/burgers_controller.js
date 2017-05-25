var db = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req,res) {
  db.Burger.findAll({
  }).then(function(burger_data){
    // console.log(burger_data);
    res.render('index', {
      burger_data
    }); 
  })
})

router.put('/update', function(req,res){
  db.Burger.update(req.body,
    {
      where: {
        id: req.body.id
      }
  }).then(function(burger_data) {
    res.render('index', {
      burger_data
    });
  });
});

router.post('/create', function(req,res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})

module.exports = router;