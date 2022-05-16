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
const create_TorontoSold = (par)=>{
    return sequelize.sync().then(function() {
        return TorontoSold.create({
            PropertyAddress: PropertyAddress,
            City: City,
            State: State,
            ZipCode: ZipCode,
            FullAddressCleaned: PropertyAddress+City+State+ZipCode
        });
    }).then(function(jane) {
        // console.log(jane.get({
        //     plain: true
        // }));
    });
}


exports = create_TorontoSold