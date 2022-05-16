var Sequelize = require('sequelize');
var sequelize = require("../DataBase/db");

var TorontoSold = sequelize.define('TorontoSold', {
    PropertyAddress: Sequelize.STRING,
    City: Sequelize.STRING,
    State: Sequelize.STRING,
    ZipCode: Sequelize.STRING,
    FullAddressCleaned:Sequelize.STRING
});

const create_TorontoSold = (PropertyAddress, City, State, ZipCode)=>{
    return sequelize.sync().then(function() {
        return TorontoSold.create({
            PropertyAddress: PropertyAddress,
            City: City,
            State: State,
            ZipCode: ZipCode,
            FullAddressCleaned
        });
    }).then(function(jane) {
        // console.log(jane.get({
        //     plain: true
        // }));
    });
}


exports = create_TorontoSold