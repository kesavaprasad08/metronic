const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const user = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    avatar: Sequelize.STRING,
    fName: Sequelize.STRING,
    lName: Sequelize.STRING,
    company: Sequelize.STRING,
    contactPhone: Sequelize.STRING,
    companySite: Sequelize.STRING,
    country: Sequelize.STRING,
    language: Sequelize.STRING,
    currency: Sequelize.STRING,
    timeZone: Sequelize.STRING,
    utcString: Sequelize.STRING,
    lastUpdated: Sequelize.STRING,
    communications:Sequelize.JSON,
    allowMarketing: Sequelize.BOOLEAN,
    payment: Sequelize.STRING,
});

module.exports = user;