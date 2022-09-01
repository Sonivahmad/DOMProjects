const toggle=document.querySelector(".nav-toggle");

const links = document.querySelector(".links");

toggle.addEventListener("click",function(){
    if(links.classList.contains("links")){
      links.classList.add("show-links")
      links.classList.remove("links")
      
    }
    else if(links.classList.contains("show-links")){

        links.classList.add("links")
        links.classList.remove("show-links")
    }
    
});