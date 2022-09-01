let btn = document.querySelector("#btn");
let parabox = document.querySelector("#para");
let item = document.querySelector("#item");
let btn2 = document.querySelector("#btn2");

let data = [
    
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis.Vitae, laboriosam quasi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis. Vitae, laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem aut necessitatibus ipsam eos vero nihil deserunt debitis nostrum maxime!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis. Vitae, laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem aut necessitatibus ipsam eos vero nihil deserunt debitis nostrum maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempore.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis. Vitae, laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem aut necessitatibus ipsam eos vero nihil deserunt debitis nostrum maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam similique aspernatur atque voluptatibus nihil?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis. Vitae, laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem aut necessitatibus ipsam eos vero nihil deserunt debitis nostrum maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempore. Lorem, ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis.Vitae, laboriosam quasi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis. Vitae, laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem aut necessitatibus ipsam eos vero nihil deserunt debitis nostrum maxime!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis. Vitae, laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem aut necessitatibus ipsam eos vero nihil deserunt debitis nostrum maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempore.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis. Vitae, laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem aut necessitatibus ipsam eos vero nihil deserunt debitis nostrum maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam similique aspernatur atque voluptatibus nihil?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit, nostrum distinctio autem natus earum ut labore soluta nobis odio ipsa obcaecati adipisci et, alias, quis blanditiis. Vitae, laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem aut necessitatibus ipsam eos vero nihil deserunt debitis nostrum maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tempore. Lorem, ipsum dolor sit amet consectetur.",
]

btn.addEventListener("click", () => {
    if(item.value == ""){
        alert("Please Enter A Number!")
    }
    else{
        for(let i=0;i<item.value;i++){
            parabox.innerHTML += `<p>${data[i]}</p>`
        }
        item.value = '';
    }
})

btn2.addEventListener("click",()=>{
    parabox.innerHTML = ""
})