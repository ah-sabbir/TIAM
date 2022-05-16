const sequelize = require("../DataBase/database");
const TorontoSold = require("../Models/torontoSoldModel");


const response = sequelize.sync().then(function() {
    return TorontoSold.create({
        PropertyAddress: "1712-125 Redpath Ave",
        City: "Toronto",
        State
    });
}).then(function(jane) {
    console.log(jane.get({
        plain: true
    }));
});