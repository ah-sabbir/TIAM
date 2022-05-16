const sequelize = require("../DataBase/database");
const TorontoSold = require("../Models/torontoSoldModel").TorontoSold;


module.exports = function(){

}



    sequelize.sync().then(function() {

}).then(function(data) {
    console.log(data.get({
        plain: true
    }));
});