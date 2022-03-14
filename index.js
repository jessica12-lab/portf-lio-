var veri = 1;
var trigger = document.getElementById('menu-trigger').addEventListener("click", function(){
   var menu1 = document.getElementById('menu');
   if (veri == 1){
       menu1.style.left = "0px";
       veri = 0;
   }else{
       menu1.style.left = "-100%";
       veri = 1;
   }

})