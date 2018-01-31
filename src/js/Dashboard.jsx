import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { News, Weather } from './components';

import { commonActions } from './actions';
import store from './store';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      weather: {},
    };
  }

  componentWillMount() {
    store.dispatch(commonActions.getNews());
    store.dispatch(commonActions.getWeather());
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps);
    this.setState({
      articles: nextProps.articles,
      weather: nextProps.weather,
    });
  }

  render() {
    const { articles, weather } = this.state;
    return (
      <div className="dashboard">
        <News articles={articles} />
        <Weather weather={weather} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state', { ...state.common } );
  return { ...state.common };
}

Dashboard.propTypes = {
  weather: PropTypes.objectOf(PropTypes.shape),
  articles: PropTypes.arrayOf(PropTypes.shape),
};

Dashboard.defaultProps = {
  weather: {},
  articles: [],
};

export default connect(mapStateToProps)(Dashboard);
