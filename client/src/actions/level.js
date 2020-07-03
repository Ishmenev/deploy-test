import axios from "axios";
import {SAVE_GAME_PROCESS} from "./types";

export const saveLevel = (data) => {
  try {
    axios.post("/api/level",
      data
    )        
  }
  
  catch (err) {
    console.log(err, 'err')
  }
};


export const getLevelData  = (level) => {
  return async (dispatch) => {        
    try {
      const res = await axios.get("/api/level/" + level);
      const data = res.data;
      dispatch({type: SAVE_GAME_PROCESS, payload: data});            
      
    } catch (err) {
      console.log(err, 'err')
    }
  }
}