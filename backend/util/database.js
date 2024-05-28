const Sequelize = require("sequelize");

const sequelize = new Sequelize("metronic","root","root123",{
    dialect:"mysql",
    host:"localhost"
});

module.exports = sequelize;
