let items = document.querySelectorAll("h1");

let futureDate = new Date(2022, 9, 1, 11, 30, 0);
let futureTime = futureDate.getTime();

// 1s = 1000ms
// 1m = 60s
// 1hr = 60min
// 1d = 24hr

// value in ms
const oneday = 24 * 60 * 60 * 1000;
const onehour = 60 * 60 * 1000;
const oneminute = 60 * 1000;

function getRemainingTime() {
    let today = new Date().getTime();
    let time = futureTime - today;

    //===============================//
    let day = Math.floor(time / oneday);
    let hour = Math.floor((time % oneday) / onehour);
    let minute = Math.floor((time % onehour) / oneminute);
    let second = Math.floor((time % oneminute) / 1000);

    //=============================================//
    items[0].innerText = day;
    items[1].innerText = hour;
    items[2].innerText = minute;
    items[3].innerText = second;
}
setInterval(getRemainingTime, 1000)