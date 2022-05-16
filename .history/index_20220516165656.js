const {contextBridge} = require("electron");
// const response = require('./Controllers/torontoSoldControler');
const create_TorontoSold = require("./Models/Toronto");
const create_vencouverSold = re
// const sequelize = new Sequelize('sqlite::memory:')
const fs = require("fs");
const { parse } = require("csv-parse");



contextBridge.exposeInMainWorld("api",{
    create_Sold_Toronto: async(Owner, PropertyAddress, City, State, ZipCode, FullAddressCleaned)=>{
            await create_TorontoSold(
                {
                    Owner: Owner,
                    PropertyAddress: PropertyAddress,
                    City: City,
                    State: State,
                    ZipCode: ZipCode,
                    FullAddressCleaned: FullAddressCleaned,
                }
            )
            console.log("data created");


    },
    create_Sold_Vencouver: async ()=>{

    },
    readTorontoSoldCSV: async(filePath)=>{
        fs.createReadStream(filePath)
            .pipe(parse({ delimiter: ",", from_line: 2 }))
            .on("data", function (row) {
                console.log(row);
            })
    },
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
