import axios from "axios"
import { REQUEST_DATA_FETCHING, 
        FETCHING_DATA_SUCCESS, 
        FETCHING_DATA_FAIL,
        FETCH_USER_BY_ID } 
        from './types'


export const getMainData  = () => async dispatch => {
  dispatch({type: REQUEST_DATA_FETCHING});

  try {
    const res = await axios.get("/api/main");
    const data = res.data;
    dispatch({type: FETCHING_DATA_SUCCESS, payload: data});

  
  } catch (err) {
    dispatch({type: FETCHING_DATA_FAIL});
  }
};

export const fetchUserById = (userId) => {
  return {
    type: FETCH_USER_BY_ID,
    payload: userId
  }
}
