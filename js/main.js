let search_nav = document.querySelector(".search_js");
let search_navA = document.querySelector(".search_jsA");
let search_type = document.querySelector(".searchtype_js");
let back_nav = document.querySelectorAll(".end_nav");

let list_sm = document.querySelector(".list_js");
let open_list = document.querySelector(".open_list_js")

let docmeh_user = document.querySelectorAll(".js_nav");
let ul_js_nav = document.querySelector(".ul_js_nav");


search_nav.addEventListener("click",function(){
    search_type.classList.remove("hidden")
    
});
search_navA.addEventListener("click",function(){
    search_type.classList.remove("hidden")
    
});
back_nav[1].addEventListener("click",function(){
    search_type.classList.add("hidden")
    
});



back_nav[0].addEventListener("click",function(){
    list_sm.classList.add("hidden")
    
});
open_list.addEventListener("click",function(){
    list_sm.classList.remove("hidden")
    
});




docmeh_user[0].addEventListener("click",function(){
    ul_js_nav.classList.toggle("hidden")
    
});
docmeh_user[2].addEventListener("click",function(){
    ul_js_nav.classList.toggle("hidden")
    
});
docmeh_user[3].addEventListener("click",function(){
    ul_js_nav.classList.toggle("hidden")
    
});
