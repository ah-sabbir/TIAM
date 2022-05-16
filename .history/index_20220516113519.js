const {contextBridge} = require("electron");
const response = require('./Controllers/torontoSoldControler');
// const sequelize = new Sequelize('sqlite::memory:')




contextBridge.exposeInMainWorld("api",{
    getSignal:async ()=>{
        try {
            // await sequelize.authenticate();
           console.log();
            // user.save()
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
})
