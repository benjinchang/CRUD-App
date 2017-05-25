// var orm = require('../config/orm.js');

// var burger = {
//   all: function(cb){
//     orm.all('burgers', function(res){
//       cb(res);
//     })
//   },
//   update: function(id, cb){
//     orm.update('burgers', id, cb);
//   },
//   create: function(name,cb){
//     orm.create('burgers', name, cb);
//   }
// }

'use strict';


var db       = require('../models');
var express  = require('express');
var router   = express.Router();

// module.exports = function(sequelize, DataTypes) {
//   var Burgers = sequelize.define('Burgers', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     destination: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     methodOfTransport: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     // The password cannot be null
//     arrivalDate: {
//       type: DataTypes.DATE,
//       allowNull: false
//     }
//   }, {
//     classMethods: {
//       associate: function(models) {
//         // associations can be defined here
//         Trip.belongsTo(models.User, {
//             foreignKey: {
//               allowNull: false
//             }
//         });
//       }
//     }
//   });
//   return Trip;
// };

module.exports = burger;