const btn = document.getElementById("btn-signal");



btn.addEventListener("click",function(){
    PropertyAddress = "1712-125 Redpath Ave",
    City = "Toronto",
    State = "Ontario",
    ZipCode = "M4S 0B5"
    FullAddressCleaned = PropertyAddress+City+State+ZipCode.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ")

    window.api.getSignal()
    window.api.create_Sold_Toronto(PropertyAddress, City, State, ZipCode);
    console.log(typeof window.api.create_Sold_Toronto());
})