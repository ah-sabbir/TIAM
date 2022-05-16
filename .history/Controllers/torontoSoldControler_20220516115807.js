const sequelize = require("../DataBase/database");
const TorontoSold = require("../Models/torontoSoldModel").TorontoSold;


module.exports = function(){
return     sequelize.sync().then(function() {

}).then(function(data) {
    console.log(data.get({
        plain: true
    }));
});
}

return TorontoSold.create({
    PropertyAddress: "1712-125 Redpath Ave",
    City: "Toronto",
    State: "Ontario",
    ZipCode: "M4S 0B5"
});

