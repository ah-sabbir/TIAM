const {contextBridge} = require("electron");

const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:')


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
  });


contextBridge.exposeInMainWorld("api",{
    getSignal:()=>"hello signal"
})
