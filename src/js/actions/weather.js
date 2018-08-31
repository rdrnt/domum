import WeatherHelper from '../helpers/weather';

const weatherActions = {
  receiveWeather: object => ({
    type: 'RECEIVE_WEATHER',
    object,
  }),

  requestWeather: () => ({
    type: 'REQUEST_WEATHER',
  }),

  fetchWeather: () => dispatch => {
    // So we set isFetching to true
    dispatch(weatherActions.requestWeather());
    WeatherHelper.get(weather => {
      dispatch(weatherActions.receiveWeather(weather));
    });
  },
};

export default weatherActions;
