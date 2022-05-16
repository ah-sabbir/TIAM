var Sequelize = require('sequelize');
var sequelize = require("../DataBase/db");

var TorontoSold = sequelize.define('TorontoSold', {
    PropertyAddress: Sequelize.STRING,
    City: Sequelize.STRING,
    State: Sequelize.STRING,
    ZipCode: Sequelize.STRING,
    FullAddressCleaned:Sequelize.STRING
});

const create_TorontoSold = ()=>{

}


exports = response