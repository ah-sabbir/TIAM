const sequelize = require("../DataBase/database");
const TorontoSold = require("../Models/torontoSoldModel");


module.exports = function(){
return sequelize.sync().then(function() {
    return TorontoSold.create({
        PropertyAddress: "1712-125 Redpath Ave",
        City: "Toronto",
        State: "Ontario",
        ZipCode: "M4S 0B5"
    });
}).then(function(data) {
    console.log(data.get({
        plain: true
    }));
});
}



