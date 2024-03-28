
const temp = document.getElementById('temp');
const pressure = document.getElementById('pressure');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');
const deg = document.getElementById('deg');
const icon = document.getElementById('icon');

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=KHARKIV&units=metric&APPID=5d066958a60d315387d9492393935c19`;

const xml = new XMLHttpRequest();
xml.open('GET', apiUrl);

xml.onreadystatechange = function () {
    if (xml.readyState === 4 && xml.status === 200) {
        const response = JSON.parse(xml.responseText);

        temp.textContent = `Temperature: ${response.main.temp}`;
        pressure.textContent = `Pressure: ${response.main.pressure}`;
        description.textContent = `Description: ${response.weather[0].description}`;
        humidity.textContent = `Humidity: ${response.main.humidity}`;
        speed.textContent = `Speed: ${response.wind.speed}`;
        deg.textContent = `Deg: ${response.wind.deg}`;

        const iconUrl = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
        icon.setAttribute('src', iconUrl)

    }
}
xml.send()