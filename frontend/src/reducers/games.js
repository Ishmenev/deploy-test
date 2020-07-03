const games = (state, action) => {
  if(state === undefined) {
    return {
      data: null,
      isFetching: false
    }
  }

  switch (action.type) {
    case 'REQUEST_DATA_FETCHING':
      return {
        data: state.data,
        isFetching: true
      };
    case 'FETCHING_DATA_SUCCESS':
      return {
        data: action.payload,
        isFetching: false
      };
    case 'FETCHING_DATA_FAIL':
      return {
        data: {
          ...state.data
        },
        isFetching: false
      };
    default:
      return state
  }
};


export default games