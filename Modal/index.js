const button = document.querySelector(".button");
const closeButton = document.querySelector(".close-button");
const innerContainer = document.querySelector(".inner-container");

button.addEventListener("click",function(){
    innerContainer.classList.toggle("show-box");


});
closeButton.addEventListener("click",function(){
    innerContainer.classList.remove("show-box");
})