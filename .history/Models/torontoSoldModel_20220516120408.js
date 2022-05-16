var Sequelize = require('sequelize');
var sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db',
});

var TorontoSold = sequelize.define('TorontoSold', {
    PropertyAddress: Sequelize.STRING,
    City: Sequelize.STRING,
    State: Sequelize.STRING,
    ZipCode: Sequelize.STRING
});

const response = sequelize.sync().then(function() {
    return TorontoSold.create({
        username: 'jane doe',
        birthday: new Date(1980, 6, 20)
    });
}).then(function(jane) {
    console.log(jane.get({
        plain: true
    }));
});

exports = TorontoSold