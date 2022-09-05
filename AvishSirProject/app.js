const openBtn = document.querySelector(".sidebar");

const container = document.querySelector(".modal-container");

const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  container.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

const modalBtn = document.querySelector(".btn");

modalBtn.addEventListener("click", () => {

  const mainContent = document.querySelector(".main-content");

  container.classList.remove('active');

  const done = document.querySelector("#done");  

});


let filterbtn = document.getElementById("filter");
filterbtn.addEventListener("change", filterData);
let sortbtn = document.getElementById("sort");
sortbtn.addEventListener("click", sortme);
const data = [];

let movieMain = document.getElementById("main");

function add(event) {
  event.preventDefault();
  let name = document.getElementById("movie-name").value;
  let trailerLink = document.querySelector("#trailer-link").value;
  let actor = document.querySelector("#actor-name").value;
  let director = document.querySelector("#director-name").value;
  let rating = document.getElementById("imdb-rating").value;
  let link = document.getElementById("poster-image-link").value;
  let category = document.getElementById("select").value;
  

  let object = {
    head1: name,
    imgLink: link,
    head2: category,
    trailer: trailerLink,
    actor:actor,
    director:director,
    rating: rating,
  };
  data.push(object);
  showData(data);
}

function filterData() {
  let val = filterbtn.value;
  let filteredData = data.filter((d) => {
    return d.head2 === val;
  });
  showData(filteredData);
}
function sortme() {
  let sortedData = data.sort((a, b) => {
    return a.rating - b.rating;
  });
  console.log(sortedData);
  showData(sortedData);
  
}