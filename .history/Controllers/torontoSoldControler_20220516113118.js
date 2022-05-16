const sequelize = require("../DataBase/database");
const TorontoSold = require("../Models/torontoSoldModel");


const response = sequelize.sync().then(function() {
    return TorontoSold.create({
        addre
    });
}).then(function(jane) {
    console.log(jane.get({
        plain: true
    }));
});