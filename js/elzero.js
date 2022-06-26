let ourSkills = document.querySelector(".our-skills");
let spans =  document.querySelectorAll(".the-progress span");
window.onscroll = () => window.scrollY >= ourSkills.offsetTop? spans.forEach((span) => span.style.width = span.dataset.width):"";

let a = setInterval(() =>{
    let data = new Date("Dec 31,2022 23:59:59").getTime() - new Date().getTime();
    let days = document.querySelector(".days");
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");
    let daysData = Math.floor(data / (1000 * 60 * 60 * 24));
    let hoursData = Math.floor(data % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutesData = Math.floor(data % (1000 * 60 * 60) / (1000 * 60));
    let secondsData = Math.floor(data % (1000 * 60) / (1000));
    days.innerHTML = daysData < 10? "0" + daysData: daysData;
    hours.innerHTML = hoursData < 10? "0" + hoursData: hoursData;
    minutes.innerHTML = minutesData < 10? "0" + minutesData: minutesData;
    seconds.innerHTML = secondsData < 10? "0" + secondsData: secondsData;
},1000);
let stats = document.querySelector(".stats");
let num =  document.querySelectorAll(".stats .box .number");
let started = true
window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop) {
        if (started) {
            num.forEach((e) => nums(e));
        }
        started = false
    }
    window.scrollY >= ourSkills.offsetTop? spans.forEach((span) => span.style.width = span.dataset.width):"";
}


function nums(e) {
    let goal = e.dataset.goal;
    let count = setInterval(() => {
        e.innerHTML++;
    if (e.textContent == goal) {
        clearInterval(count);
    }
    }, 2000 / goal);
}