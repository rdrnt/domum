import React from 'react';
import PropTypes from 'prop-types';

const Weather = (props) => {
  const { weather } = props;
  return (
    <div className="weather">
      <div className="container">
        <div className="weather-info">
          <h2 className="location">{weather.city || ''}</h2>
          <h3 className="condition">{weather.celsius}</h3>
        </div>
      </div>
    </div>
  );
};


Weather.propTypes = {
  weather: PropTypes.objectOf(PropTypes.shape).isRequired,
};


export default Weather;
