const {contextBridge} = require("electron");
// const response = require('./Controllers/torontoSoldControler');
const create_TorontoSold = require("./Models/Toronto");
// const sequelize = new Sequelize('sqlite::memory:')




contextBridge.exposeInMainWorld("api",{
    create_Sold_Toronto: async(PropertyAddress, City, State, ZipCode, FullAddressCleaned)=>{
            await create_TorontoSold(
                {
                    PropertyAddress: PropertyAddress,
                    City: City,
                    State: State,
                    ZipCode: ZipCode,
                    FullAddressCleaned: FullAddressCleaned,
                }
            )
            console.log("data created");


    },
    create_Sold_Vencouver: async ()=
    getSignal:()=>{
        try {
            console.log("hello signal");
            // await sequelize.authenticate();
        //    response();
            // user.save()
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
})
