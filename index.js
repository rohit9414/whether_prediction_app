const form = document.querySelector('.form');
const mainimage = document.querySelector('.mainimage img');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const cityName = document.querySelector('.input').value;

    async function checkWeather() {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?appid=e0578615a08c6028fae1edf47db406de&units=metric&q=${cityName}`
        );

        const data = await response.json();

        console.log(data);

        document.querySelector(".temp").innerHTML =
            `Temperature : ${data.main.temp}°C`;

        document.querySelector(".city").innerHTML =
            `City Name : ${data.name}`;

        document.querySelector(".humidity").innerHTML =
            `Humidity : ${data.main.humidity}%`;

        document.querySelector(".windspeed").innerHTML =
            `Wind Speed : ${data.wind.speed} m/s`;


        // Weather image
        if (data.weather[0].main === "Clouds") {

            mainimage.src = "cloudy.jpeg";

        }
        else if (data.weather[0].main === "Rain") {

            mainimage.src = "rainy.jpg";

        }
        else if (data.weather[0].main === "Clear") {

            mainimage.src = "sunny.jpeg";

        }
        else if (data.weather[0].main === "Fog") {

            mainimage.src = "foggi.jpeg";

        }
    }
    

    checkWeather();
    e.reset();
});