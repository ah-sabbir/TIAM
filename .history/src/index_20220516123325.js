const btn = document.getElementById("btn-signal");



btn.addEventListener("click",function(){
    
    window.api.getSignal()
    window.api.create_Sold_Toronto(PropertyAddress, City, State, ZipCode);
    console.log(typeof window.api.create_Sold_Toronto());
})