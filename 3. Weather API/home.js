let a = document.querySelector("#city");
let b = document.querySelector("#findtemp");
let c = document.querySelector("#city1");
let d = document.querySelector("#temp");
let e = document.querySelector("#imag")
let f = document.querySelector("#weather");
let h = document.querySelector("#time");
let g;

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else { 
c.textContent = "Geolocation is not supported by this browser.";
}

function showPosition(position) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=283f7cf46f02bcf0d6c842f81f965b74')
    .then(response  => response.json())
    .then(data => {
        c.textContent = data.name + ", " + data.sys.country ;
        d.textContent = data.main.temp + '°C';
        e.setAttribute("src", "http://openweathermap.org/img/wn/"+ data.weather[0].icon + "@2x.png")
        f.textContent = data.weather[0].description;
        g = data;
        console.log(g);
    })
}



    
b.addEventListener("click", ()=>{
    console.log(a.value);
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + a.value + '&units=metric&appid=283f7cf46f02bcf0d6c842f81f965b74')
    
    .then(response  => response.json())
    .then(data => {
        c.textContent = data.name + ", " + data.sys.country ;
        d.textContent = data.main.temp + '°C';
        e.setAttribute("src", "http://openweathermap.org/img/wn/"+ data.weather[0].icon + "@2x.png")
        f.textContent = data.weather[0].description;
        g = data;
        console.log(g);
    })

})

VanillaTilt.init(document.querySelector("#info1"), {
    max: 25,
    speed: 400
});


