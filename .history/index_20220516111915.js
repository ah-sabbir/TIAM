const {contextBridge} = require("electron");
const Re = require('./Models/testModel');
// const sequelize = new Sequelize('sqlite::memory:')




contextBridge.exposeInMainWorld("api",{
    getSignal:async ()=>{
        try {
            // await sequelize.authenticate();
            await User.build({
                firstName:"sabbir",
                lastName:"ahmmed"
            })
            // user.save()
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
})
