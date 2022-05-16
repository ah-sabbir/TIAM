const btn = document.getElementById("btn-signal");

btn.addEventListener("click",function(){
    window.api.getSignal()
    window.api.create_Sold_Toronto(

    );
    console.log(typeof window.api.create_Sold_Toronto());
})