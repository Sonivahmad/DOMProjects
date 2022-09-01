const menu = [
    {
        id : 1,
        title:"Paneer Butter Masala",
        category:"lunch",
        price:100,
        img:".jpg",
        desc: `Paneer butter masala, also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter. `,
    },
    {
        id: 2,
        title: "Daal Makhani",
        category: "lunch",
        price: 80,
        img: "",
        desc: `Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils (known as Urad dal  `,
      },
      {
        id: 3,
        title: "Biryani",
        category: "Lunch",
        price: 100,
        img: "g",
        desc: `Veg biryani also known as vegetable biryani is an aromatic rice dish made with basmati rice, spices & mixed veggies..`,
      },
      {
        id: 4,
        title: "Chhole Bhatoore",
        category: "breakfast",
        price: 50,
        img: "",
        desc: `Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. `,
      },
      {
        id: 5,
        title: "Tea",
        category: "Breakfast",
        price: 10,
        img: "",
        desc: `Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, `,
      },
      {
        id: 6,
        title: "Parathha",
        category: "Breakfast",
        price: 20,
        img: "",
        desc: `Paratha is a flatbread native to the Indian subcontinent, prevalent throughout the modern-day nations of India, Sri Lanka, Pakistan, Nepal, Bangladesh, Maldives, Afghanistan, Myanmar, Malaysia, Singapore, Mauritius, Fiji, Guyana, Suriname, and Trinidad and Tobago where wheat is the traditional staple`,
      },
      {
        id: 7,
        title: "Rajma Chawal",
        category: "breakfast",
        price: 50,
        img: "",
        desc: `Rājmā, also known as rajmah, rāzmā, or lal lobia, is a vegetarian dish, originating from the Indian subcontinent, consisting of red kidney beans in a thick gravy with many Indian whole spices, and is usually served with rice `,
      },
      {
        id: 8,
        title: "Malai Kofta",
        category: "Dinner",
        price: 100,
        img: "",
        desc: `Malai Kofta is a curried vegetarian dish consisting of crisp fried potato paneer koftas (fried balls) served with a creamy, smooth and rich.  `,
      },
      {
        id: 9,
        title: "Mix Veg",
        category: "Dinner",
        price: 70,
        img: "",
        desc: `Chop the veggies in evenly sized small to medium sized pieces so that they cook well. You can use mix vegetables like cauliflower, carrots.`,
      },
      {
        id: 10,
        title: "Ghee Naan",
        category: "dinner",
        price: 15,
        img: "",
        desc: `This is my favorite naan recipe, and I have tried making it with various substitutions (milk instead of yogurt, olive oil for ghee, garlic and garam masala.`,
      },
];

const sectionCenter = document.querySelector(".section-center");
   
const filterBtns = document.querySelectorAll(".filter-btn"); 

// load items
window.addEventListener("DOMContentLoaded",function(){
   displayMenuItems(menu);
});
// filter items

filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const category = e.currentTarget.dataset.xyz;
        const menuCategory = menu.filter(function(menuItem){
          if(menuItem.category===category){
            return menuItem;
          }
          
        });
        if(category==="all"){
          displayMenuItems(menu);
        }else{
          displayMenuItems(menuCategory)
        }
    });
});


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">₹${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu;
}
