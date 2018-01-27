function common(state = [], action) {
  switch (action.type) {
    case 'UPDATE_NEWS': {
      return { ...state, articles: action.object };
    }
    case 'UPDATE_WEATHER': {
      return { ...state, weather: action.object };
    }
    default: {
      return state;
    }
  }
}

export default common;
