const {contextBridge} = require("electron");
// const response = require('./Controllers/torontoSoldControler');
const create_TorontoSold = require("./Models/torontoSoldModel");
// const sequelize = new Sequelize('sqlite::memory:')




contextBridge.exposeInMainWorld("api",{
    create_Sold_Toronto:(PropertyAddress, City, State, ZipCode)=>{
        if(PropertyAddress && City && State && ZipCode){
            create_TorontoSold(
                {
                    PropertyAddress: PropertyAddress,
                    City: City,
                    State: State,
                    ZipCode: ZipCode,
                    FullAddressCleaned: PropertyAddress+City+State+ZipCode
                }
            )
        }else{
            
        }


    },
    getSignal:()=>{
        try {
            // await sequelize.authenticate();
           response();
            // user.save()
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
})
