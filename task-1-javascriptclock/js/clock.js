let name = prompt("Adınız Nedir?")

let nameInfo = document.querySelector("#myName")
nameInfo.innerHTML = name;

function showTime() {
    let clock = document.querySelector("#myClock")
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = daysOfWeek[now.getDay()]
    
    clock.innerHTML = `${hour}:${minute}:${second} ${day}`;
}

// window.onload = function() {
//     showTime();
//     setInterval(showTime, 1000);
// };

showTime();
setInterval(showTime, 1000);