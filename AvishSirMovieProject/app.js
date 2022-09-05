const cancelBtn = document.querySelector(".close-btn");
const taskBtn = document.querySelector(".open-btn");
const modalCont = document.querySelector(".task-modal");
const mainCont = document.querySelector(".task-container");

taskBtn.addEventListener("click", (e) => {
    // Display modal
    console.log("Clicked on the button");
    modalCont.style.display = "flex";
    mainCont.classList.toggle(".blur")
})
cancelBtn.addEventListener("click", (e) => {
    
    modalCont.style.display = "none";
    mainCont.classList.toggle(".blur")
})



const emptyArr=[]
let mainSection = document.getElementById("main");

let doneBtn = document.querySelector(".done-btn");
doneBtn.addEventListener("click", (event) => {
  add(event);
});
let rateBtn=document.querySelector('.rate')
rateBtn.addEventListener('click',sortRate)
let categoryBtn=document.querySelector('#filter');
categoryBtn.addEventListener('change', filterByCategory);



function add(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
  let link = document.getElementById("link").value;
  let category = document.getElementById("select").value;
  let trailerLink = document.querySelector("#videoLink").value;
  let actor = document.querySelector("#actor").value;
  let actress = document.querySelector("#actress").value;
  let rating = document.getElementById("rating").value;

  let object = {
    head1: name,
    imgLink: link,
    head2: category,
    trailer: trailerLink,
    actor:actor,
    actress:actress,
    rating: rating,
  };
  emptyArr.push(object);
  displayData(emptyArr);
}
function filterByCategory(){
    let val=categoryBtn.value;
    let filterByCategory=emptyArr.filter((d)=>{
        return d.head2===val
    });
     displayData(filterByCategory)
}

  function sortRate() {
    let sortedData = emptyArr.sort((a, b) => {
      return b.rating - a.rating;
    });
    console.log(sortedData);
    displayData(sortedData);
    
  }
  function displayData(array){
    console.log(array);
    mainSection.innerHTML = null;
    array.map((d) => {
      console.log("d", d);
      let div = document.createElement("div");
      div.style.width='300px';
      div.style.height='350px';
      div.style.margin='20px';
      div.style.paddingLeft='15px'
    div.style.border='5px solid gold';
    div.style.textAlign='center'
    div.style.backgroundColor='grey'
    div.style.color='gold';
    div.classList.add('inlineBlock')

  
      let movieName = document.createElement("h1");
      let img = document.createElement("img");
      let category = document.createElement("h2");
      let trailer = document.createElement("a");
      let actor = document.createElement("h2");
      let actress = document.createElement("h2");
      let rating = document.createElement("h3");
      
      movieName.textContent =`Name: ${d.head1}`; 
      img.setAttribute("src", d.imgLink); 
    img.style.width="200px";
    img.style.height="200px";

    category.textContent = `Category: ${d.head2}`;

    trailer.setAttribute("href",d.trailer) ;
    trailer.textContent=d.trailer;
    trailer.innerText="Trailer";
    trailer.setAttribute("target","_blank");

    actor.textContent = `Actor: ${d.actor}`;

    actress.textContent = `Actress: ${d.actress}`;

    rating.textContent = `Rating: ${d.rating}`;
    div.append(movieName,img,category,actor,actress,rating,trailer,);
    mainSection.append(div);



  });
  }