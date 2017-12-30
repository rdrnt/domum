function common(state = [], action) {
  switch (action.type) {
    case 'FETCH_NEWS': {
      return { ...state, articles: action.object };
    }
    default: {
      return state;
    }
  }
}

export default common;
