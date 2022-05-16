const btn = document.getElementById("btn-signal");



btn.addEventListener("click",function(){
    PropertyAddress = "1712-125 Redpath Ave";
    City = "Toronto";
    State = "Ontario";
    ZipCode = "M4S 0B5";
    FullAddressCleaned = str(PropertyAddress+City+State+ZipCode)..replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, " ");
    console.log(FullAddressCleaned);
    window.api.getSignal()
    window.api.create_Sold_Toronto(PropertyAddress, City, State, ZipCode, FullAddressCleaned);
    console.log(typeof window.api.create_Sold_Toronto());
})