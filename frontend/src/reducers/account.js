// const initialState = {
//   user: 'Alexander',
//   data: null,
//   isFetching: false
// };

const account = (state, action) => {

  if(state === undefined) {
    return {
      user: {
        name: 'Александр',
        social: 'VC'
      },
      isFetching: false
    }
  }
  return state

  // switch (action.type) {
  //   case 'FETCHING_USER_BY_ID':
  //     return {
  //       ...state,
  //       // user: state.user,
  //       isFetching: true
  //     }
  //   case 'FETCHING_USER_SUCCES':
  //     return {
  //       ...state,
  //       // user: action.payload,
  //       isFetching: false
  //     }
  //   case 'FETCHING_USER_FAIL':
  //     return {
  //       ...state,
  //       // user: {
  //       //   ...state.user
  //       // },
  //       isFetching: true
  //     }
  //   default:
  //     return state
  // }
};


export default account