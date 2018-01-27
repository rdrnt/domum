import React from 'react';
import PropTypes from 'prop-types';

const Weather = (props) => {
  const { weather } = props;
  console.log(weather);
  return (
    <div className="weather">
      <div className="container">
        <div className="weather-info">
          <h2 className="condition">{weather.city}</h2>
        </div>
      </div>
    </div>
  );
};


Weather.propTypes = {
  weather: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Weather;