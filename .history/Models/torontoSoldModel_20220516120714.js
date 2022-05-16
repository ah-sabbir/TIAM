var Sequelize = require('sequelize');
var sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db',
});

var TorontoSold = sequelize.define('TorontoSold', {
    PropertyAddress: Sequelize.STRING,
    City: Sequelize.STRING,
    State: Sequelize.STRING,
    ZipCode: Sequelize.STRING,
    FullAddressC
});

const response = sequelize.sync().then(function() {
    return TorontoSold.create({
        PropertyAddress: "1712-125 Redpath Ave",
        City: "Toronto",
        State: "Ontario",
        ZipCode: "M4S 0B5"
    });
}).then(function(jane) {
    console.log(jane.get({
        plain: true
    }));
});

exports = response