import axios from "axios";

export const getMainData  = () => {
  return async (dispatch) => {
    dispatch(requestDataFetching());
  
    try {
      const res = await axios.get("/api/main");
      const data = res.data;
      dispatch(fetchingDataSuccess(data));

    
    } catch (err) {
      dispatch(fetchingDataFail());
    }
  } 
};


function requestDataFetching() {
  return {
    type: 'REQUEST_DATA_FETCHING'
  }
}

function fetchingDataSuccess(data) {

  return {
    type: 'FETCHING_DATA_SUCCESS',
    payload: data
  }
}

function fetchingDataFail() {
  return {
    type: 'FETCHING_DATA_FAIL'
  }
}

export const fetchUserById = (userId) => {
  return {
    type: 'FETCH_USER_BY_ID',
    payload: userId
  }
}
