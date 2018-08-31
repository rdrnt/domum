function weather(state = [], action) {
  switch (action.type) {
    case 'REQUEST_WEATHER': {
      return {
        ...state,
        isFetching: true,
      };
    }
    case 'RECEIVE_WEATHER': {
      return {
        ...state,
        isFetching: false,
        info: action.object,
      };
    }
    default: {
      return state;
    }
  }
}

export default weather;
