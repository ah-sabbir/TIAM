const {contextBridge} = require("electron");
const response = require('./');
// const sequelize = new Sequelize('sqlite::memory:')




contextBridge.exposeInMainWorld("api",{
    getSignal:async ()=>{
        try {
            // await sequelize.authenticate();
           console.log(response);
            // user.save()
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
})
