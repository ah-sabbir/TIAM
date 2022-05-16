const {contextBridge} = require("electron");




contextBridge.exposeInMainWorld("api",{
    getSignal:()=>"hello signal"
})
