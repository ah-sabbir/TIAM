var Sequelize = require('sequelize');
var sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db',
});

var User = sequelize.define('Toronto', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

const response = sequelize.sync().then(function() {
    return User.create({
        username: 'jane doe',
        birthday: new Date(1980, 6, 20)
    });
}).then(function(jane) {
    console.log(jane.get({
        plain: true
    }));
});

exports = response