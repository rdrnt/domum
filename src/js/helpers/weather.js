class WeatherRepresentation {
  constructor(weatherJson) {
    this.city = weatherJson.name;
    this.condition = {
      main: weatherJson.weather[0].main,
      extra: weatherJson.weather[0].description,
    };
    this.celsius = weatherJson.main.temp;
    this.sun = {
      rise: new Date(weatherJson.sys.sunrise * 1000),
      set: new Date(weatherJson.sys.sunset * 1000),
    };
  }
}

const WeatherHelper = {
  get: (callback) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pickering&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, {
      method: 'GET',
    })
      .then(results => results.json())
      .then((json) => {
        callback(new WeatherRepresentation(json));
      })
      .catch((error) => {
        console.log('Error fetching weather', error);
      });
  },
};

export default WeatherHelper;
