const initialState = {
    data: null,
    isAuth: null,
    isFetching: false
};

const user = (state = initialState, action) => {
    console.log(action.type)
    
    switch (action.type) {
      
        case 'LOGIN_USER_SUCCESS':
            return {
                data: {
                    ...action.payload
                },
                isAuth: true,
                isFetching: false
            };
        
        case 'LOGIN_USER_FAILED':
            return {
                data: null,
                isAuth: false,
                isFetching: false
            };
        
        case 'USER_DATA_FETCHING':
            return {
                data: state.data,
                isFetching: true
            };
        case 'USER_DATA_SUCCESS':
            return {
                data: action.payload,
                isFetching: false
            };
        case 'USER_DATA_FAIL':
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

export default user