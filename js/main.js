let search_nav = document.querySelector(".search_js");
let search_navA = document.querySelector(".search_jsA");
let search_type = document.querySelector(".searchtype_js");
let back_nav = document.querySelector(".end_nav");

search_nav.addEventListener("click",function(){
    search_type.classList.remove("hidden")
    
});
search_navA.addEventListener("click",function(){
    search_type.classList.remove("hidden")
    
});
back_nav.addEventListener("click",function(){
    search_type.classList.add("hidden")
    
});