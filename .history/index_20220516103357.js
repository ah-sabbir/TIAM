const {contextBridge} = require("electron");

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:')




contextBridge.exposeInMainWorld("api",{
    getSignal:()=>"hello signal"
})
