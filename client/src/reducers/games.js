import { REQUEST_DATA_FETCHING, 
  FETCHING_DATA_SUCCESS, 
  FETCHING_DATA_FAIL } 
  from '../actions/types'

const games = (state, action) => {
  if(state === undefined) {
    return {
      data: {
        levels: null
      },    
      isFetching: false
    }
  }

  switch (action.type) {
    case REQUEST_DATA_FETCHING:
      return {
        data: state.data,
        isFetching: true
      };
    case FETCHING_DATA_SUCCESS:
      return {
        data: action.payload,
        isFetching: false
      };
    case FETCHING_DATA_FAIL:
      return {
        data: {
          ...state.data
        },
        isFetching: false
      };
    default:
      return state
  }
}

export default games