const btn = document.getElementById("btn-signal");
const response = require('./Controllers/torontoSoldControler');
btn.addEventListener("click",function(){
    console.log(window.api);
})