const weatherApiKey = '8b7351e3f6ec4a5f8f2184847232710';
const GnewsApiKey = 'a173d2c049cc2adbe805305a78c69721';

document.addEventListener('locationUpdated', () => {
    
    
    console.log("Updated Currentlocation in other file:", window.Currentlocation);
    const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${Currentlocation.cityName}`;
    const newsApiUrl = `https://newsapi.org/v2/everything?q=${Currentlocation.cityName}&sortBy=popularity&from=2023-10-27&apiKey=18b9df7efe454ebfb6a44bf8c1db84b1`
    const GnewsApiUrl = `https://gnews.io/api/v4/search?q=${Currentlocation.cityName}&from=2023-10-28&lang=en&apikey=${GnewsApiKey}`
    

setInterval(async () => {
    fetch(weatherApiUrl).
    then(response=>{
        return response.json()
    })
    .then(result=>{
        const calamities = ['thunderstorm', 'earthquakes', 'tsunami','flood', 'forest fires', 'landslides', 'avalanche']

        weatherImage.src = result.current.condition.icon;
        temperature.innerHTML = result.current.temp_c + "&deg;C";
        tempCondition.innerHTML = result.current.condition.text;
        location_city.innerHTML = result.location.name;
        location_state.innerHTML = result.location.region + ", " + result.location.country + "."
        feels_like.innerHTML = "Feels Like " + result.current.feelslike_c + " &deg;C";
        winds.innerHTML = `Wind Speed- ${result.current.gust_kph} km/h ${result.current.wind_dir}`;
        pressure.innerHTML = `Pressure- ${result.current.pressure_in} "Hg`;
        longi = result.location.lon;
        lati = result.location.lat;
        time_id.innerHTML = result.location.localtime.substring(11, 16)

        let condition_weather = result.current.condition.text.split();

        for(let i = 0; i<calamities.length; i++)
        {
            for(let j = 0; j<condition_weather.length; j++)
            {
                if(calamities[i] == condition_weather[j])
                {
                    signalAleart();
                }
                else{
                    stopAleart()
                }
            }
        }


    })
    .catch(error => {
        console.error('Error Fetching the API...')
    })

    
    
}, 1000);
    
// fetch(weatherApiUrl)
//     .then(response => {
//         const data = response.json();
//         return data;
//     })
//     .then(result => {

    //     console.log(result);

        // weatherImage.src = result.current.condition.icon;
        // temperature.innerHTML = result.current.temp_c + "&deg;C";
        // tempCondition.innerHTML = result.current.condition.text;
        // location_city.innerHTML = result.location.name;
        // location_state.innerHTML = result.location.region + ", " + result.location.country + "."
        // feels_like.innerHTML = "Feels Like " + result.current.feelslike_c + " &deg;C";
        // winds.innerHTML = `Wind Speed- ${result.current.gust_kph} km/h ${result.current.wind_dir}`;
        // pressure.innerHTML = `Pressure- ${result.current.pressure_in} "Hg`;
        // longi = result.location.lon;
        // lati = result.location.lat;

        // time_id.innerHTML = result.location.localtime.substring(11, 16)

    // })
    // .catch(error => {
    //     console.error('Error Fetching the API...')
    // })

    fetch(GnewsApiUrl)
    .then(response => {
        const data = response.json();
        return data;
    })
    .then(result => {
        console.log(result);
    for(let i = 0; i<result.articles.length;i++)
    {
        newsContainer.insertAdjacentHTML('afterbegin',`
        <div class="newsCard">
                <div class="title"><a href="${result.articles[i].url}" target="_blank">${result.articles[i].title}</a></div>
                <div class="description">${result.articles[i].description}</div>
                <div class="source">${result.articles[i].source.name}</div>
        `)
    }
    })

})




// fetch(newsApiUrl)
//     .then(response => {
//         const data = response.json();
//         return data;
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error('Error Fetching the API...')
// })