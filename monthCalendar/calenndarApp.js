const monthEl = document.querySelector('.date h1')
const fullDateEl = document.querySelector('.date p')
const daysEl = document.querySelector(".days")


const monthIndex = new Date().getMonth();

const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate()
const firstDay = new Date(new Date().getFullYear(), monthIndex , 1).getDay() - 1;


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "Jully",
    "August",
    "September",
    "Octomber",
    "November",
    "December"
];

monthEl.textContent = months[monthIndex];
fullDateEl.textContent = new Date().toDateString()

let days = "";

for(let i = firstDay; i > 0; i--){
    days += `<div class="empty"></div>`

}

for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`
    }else{
        days += `<div>${i}</div>`
    }
    
    
}

daysEl.innerHTML = days;