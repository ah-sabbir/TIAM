var Sequelize = require('sequelize');
var sequelize = require("../DataBase/db");

var TorontoSold = sequelize.define('TorontoSold', {
    PropertyAddress: Sequelize.STRING,
    City: Sequelize.STRING,
    State: Sequelize.STRING,
    ZipCode: Sequelize.STRING,
    FullAddressCleaned:Sequelize.STRING
});
// params: PropertyAddress, City, State, ZipCode
const create_TorontoSold = (params_object)=>{
    return sequelize.sync().then(function() {
        return TorontoSold.create(params_object);
    }).then(function(d) {
        // console.log(jane.get({
        //     plain: true
        // }));
    });
}


exports = create_TorontoSold