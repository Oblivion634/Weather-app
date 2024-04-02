const getWeather = (city) =>{
    const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;


    cityName.innerHTML=city;
    xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);

            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        } else {
            console.error("Request failed with status: " + this.status);
        }
    }
});

xhr.open('GET', 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi');
xhr.setRequestHeader('X-RapidAPI-Key', 'c4dd1f9b0dmsh4c48ef82c7acb04p1d7fd3jsnf2236df4bae4');
xhr.setRequestHeader('X-RapidAPI-Host', 'weather-by-api-ninjas.p.rapidapi.com');

xhr.send(data);
}

submit.addEventListener("click",(e)=>
{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")