// -- Defining variables and functions --

function showweatherDetails(event) {
    // prevents default behaviour of an event (such as form submission)
    event.preventDefault();

    // initializing variables for city, apiKey and apiUrl
        // contains value entered by user input 'city'
    const city = document.getElementById('city').value;
        // my own apiKey obtained from opeanweather account 
    const apiKey = '736bb5b8738c99a15f6d026a6ef23733' ;
        // url for the api that gets weather by city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    // -- practice task --
        // getting weather by lattitude and longitude
    const lat = document.getElementById('lattitude').value;
    const lon = document.getElementById('longitude').value;
        // url for api that gets weather by lattitude and longitude
    const apiUrlLatLon = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`


    // -- fetch details related to city (user input) --
        // initiates an ansynchronous HTTP request to the specified apiUrl
        // to retrieve weather data
    fetch(apiUrlLatLon)
        
        // response handling with promise
            // processes the response by first converting to JSON format 
        .then(response => response.json())
            // then accesses the resulting data
        .then(data => {
            console.log(data);

            // updates HTML content dinamically
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
                                
        })

    // catches error if user enters wrong city name
    .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });


// -- practice task: fetch details related to lattitude, lonfitude (user input) --
    fetch(apiUrlLatLon)

        .then(response => response.json())
            // then accesses the resulting data
        .then(data => {
            console.log(data);

            // updates HTML content dinamically
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
                                
        })

        // catches error if user enters wrong lattitude & longitude
        .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });

}



// attaches event listener to weatherForm listening for a submit event
// and triggering the showweatherDetails function upo form submission
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );



