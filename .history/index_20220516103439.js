const {contextBridge} = require("electron");

const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:')


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/database.sqlite'
  });


contextBridge.exposeInMainWorld("api",{
    getSignal:()=>{
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
})
