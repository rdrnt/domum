import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Weather } from '../components';

import { weatherActions } from '../actions';
import store from '../store';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {},
    };
  }

  componentDidMount() {
    store.dispatch(weatherActions.fetchWeather());
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps);
    this.setState({
      weather: nextProps.weather,
    });
  }

  render() {
    const { weather } = this.state;
    console.log('Weather in state', weather);
    return (
      <div className="dashboard">
        <Weather weather={weather} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return { ...state };
}

/*
Dashboard.propTypes = {
  weather: PropTypes.objectOf(PropTypes.shape),
};

Dashboard.defaultProps = {
  weather: {},
};
*/

export default connect(mapStateToProps)(Dashboard);
