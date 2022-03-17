const Sequelize = require('sequelize');

const sequelize = new Sequelize('allindia', 'root', 'sans@0000R', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
