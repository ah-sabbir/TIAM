const {contextBridge} = require("electron");

const { Sequelize } = require('sequelize');



contextBridge.exposeInMainWorld("api",{
    getSignal:()=>"hello signal"
})
