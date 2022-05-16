const {contextBridge} = require("electron");
const response = require('./Controllers/torontoSoldControler');
// const sequelize = new Sequelize('sqlite::memory:')




contextBridge.exposeInMainWorld("api",{
    getSignal:function(){
        console.log("hello");
    }
})
