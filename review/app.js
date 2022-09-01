const reviews = [
    {
      id: 1,
      name: "Soniv ahmad",
      job: "web designer ",
      img:
        "https://image.shutterstock.com/image-photo/smiling-bearded-young-male-model-260nw-788313199.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Amit singh",
      job: "webdeveloper ",
      img:
        "https://img.freepik.com/free-photo/serious-looking-male-handsome-guy-with-blond-hair-wearing-grey-hoodie-people-emotion-concept-watching-confident-isolated-grey-wall_295783-13901.jpg?w=2000",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "rahil khan",
      job: "intern",
      img:
        "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "shuaib",
      job: "the boss",
      img:
        "https://st.depositphotos.com/2309453/3449/i/600/depositphotos_34490345-stock-photo-confident-casual-unshaven-young-man.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
//   select items
  const img = document.getElementById("image");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
// set starting item
 let currentItem = 0;

//  load initial item
window.addEventListener("DOMContentLoaded",function(){
    const item = reviews[currentItem];
    // console.log(item)
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
});

// show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.jab;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})

    // show prev person
    prevBtn.addEventListener("click",function(){
        currentItem--;
        if(currentItem < 0){
            currentItem=reviews.length-1;
        }
        showPerson(currentItem)
    });
    // show random person
    randomBtn.addEventListener("click", function () {
      
        currentItem = Math.floor(Math.random() * reviews.length);
        showPerson(currentItem);
      });