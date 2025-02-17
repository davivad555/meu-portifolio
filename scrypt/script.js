var statuss = "true";
document.querySelector(".icone--toggle").addEventListener("click",()=>{
   const menu = document.querySelector(".menu");
   const close = document.querySelector(".close");
   const nav = document.querySelector("nav");
   
   if(statuss =="true"){
         menu.style.display = "none"
         close.style.display = "block" 
         statuss = "false";

         nav.style.width = "100vw";
         document.body.style.overflow = "hidden";
   }
   else{
      close.style.display = "none"
      menu.style.display = "block"
      statuss = "true"
      
      nav.style.width = "0vw";
      document.body.style.overflow = "auto";
      }
   

})
