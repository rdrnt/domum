class WeatherRepresentation {
  constructor(weatherJson) {
    this.city = weatherJson.name;
    this.condition = weatherJson.weather.description;
    this.celsius = weatherJson.main.temp;
    this.sun = {
      rise: new Date(weatherJson.sys.sunrise).getTime(),
      set: new Date(weatherJson.sys.sunset).getTime(),
    }
  }
}

const WeatherHelper = {
  get:(callback) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Pickering&units=metric&appid=cd1efab000e8575fc595221a8d421af2', {
      method: 'GET',
    })
      .then (results => {
        return results.json();
      }).then(json => {
        callback(new WeatherRepresentation(json));
      });
  },
};

export default WeatherHelper;