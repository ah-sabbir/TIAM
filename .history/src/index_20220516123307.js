const btn = document.getElementById("btn-signal");

PropertyAddress = "1712-125 Redpath Ave",
City = "Toronto",
State = "Ontario",
ZipCode = "M4S 0B5"

btn.addEventListener("click",function(){
    window.api.getSignal()
    window.api.create_Sold_Toronto(
    );
    console.log(typeof window.api.create_Sold_Toronto());
})