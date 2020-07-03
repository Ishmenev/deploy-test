const initialState = {
  data: {
    properties: null,
    levels: null
  },
  isFetching: null,
  errorStatus: null
};

const main = (state = initialState, action) => {
  // if(state === undefined) {
  //   return {
  //     data: null,
  //     isFetching: false
  //   }
  // }

  switch (action.type) {
    case 'REQUEST_DATA_FETCHING':
      return {
        data: state.data,
        isFetching: true,
        errorStatus: null
      };
    case 'FETCHING_DATA_SUCCESS':
      return {
        data: action.payload,
        isFetching: false,
        errorStatus: null
      };
    case 'FETCHING_DATA_FAIL':
      return {
        data: {
          ...state.data
        },
        isFetching: false,
        errorStatus: action.payload
      };
    default:
      return state
  }
};

export default main