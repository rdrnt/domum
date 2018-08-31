import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ weather }) => {
  console.log('Weather props', weather);
  if (!weather.isFetching) {
    return (
      <div className="weather">
        <div className="container">
          <div className="weather-info">
            <h2 className="location">{weather.info.location}</h2>
            <h3 className="condition">{weather.info.condition.main}</h3>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

Weather.propTypes = {
  weather: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Weather;
