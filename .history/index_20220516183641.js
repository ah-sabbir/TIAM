const {contextBridge} = require("electron");
// const response = require('./Controllers/torontoSoldControler');
const {create_TorontoSold, create_TorontoNew} = require("./Models/Toronto");
const {create_vencouverSold, create_vencouverNew} = require("./Models/Vencouver");

// const sequelize = new Sequelize('sqlite::memory:')
const fs = require("fs");
const { parse } = require("csv-parse");



contextBridge.exposeInMainWorld("api",{
    create_New_Toronto: async(Owner, PropertyAddress, City, State, ZipCode, FullAddressCleaned)=>{
            await create_TorontoNew(
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
    create_New_Vencouver: async (filePath)=>{
        fs.createReadStream(filePath)
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
            await create_vencouverNew(
                {
                    Owner: row[0],
                    PropertyAddress: row[1],
                    City: row[2],
                    State: row[3],
                    ZipCode: row[4],
                    FullAddressCleaned: row[],
                }
            )
        })


    },
    create_Sold_Vencouver: async (Owner, PropertyAddress, City, State, ZipCode, FullAddressCleaned)=>{
        await create_vencouverSold(
            {
                Owner: Owner,
                PropertyAddress: PropertyAddress,
                City: City,
                State: State,
                ZipCode: ZipCode,
                FullAddressCleaned: FullAddressCleaned,
            }
        )
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
