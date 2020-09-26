import axios from 'axios';
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_DATA})
      axios
          .get("http://localhost:3333/smurfs")
          .then(res => {
              console.log("Fetch success", res.data);
              dispatch({type: FETCH_SUCCESS, payload: res.data})
          })
          .catch(err => {
              console.log("Error:", err);
              dispatch({type: FETCH_FAIL, payload: err})
          })
  }
  
export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";
  
export const postSmurfs = (smurfs) => (dispatch) => {
    dispatch({ type: POST_DATA})
      axios
        .post("http://localhost:3333/smurfs", smurfs)
        .then(res => {
            console.log("Post success", res.data);
            dispatch({type: POST_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("Error:", err);
            dispatch({type: POST_FAIL, payload: err.response})
        })
}

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";

export const deleteSmurfs = (smurfs) => (dispatch) => {
    dispatch({ type: DELETE_DATA})
      axios
        .delete("http://localhost:3333/smurfs/${smurfs.id}")
        .then(res => {
            console.log("Delete success", res.data);
            dispatch({type: DELETE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("Error:", err);
            dispatch({type: DELETE_FAIL, payload: err.response})
        })
}

export const UPDATE_DATA = "UPDATE_DATA";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAIL = "UPDATE_FAIL";

export const updateSmurfs = (newSmurfs) => (dispatch) => {
    dispatch({ type:UPDATE_DATA})
      axios
        .delete("http://localhost:3333/smurfs/${newSmurfs.id}", newSmurfs)
        .then(res => {
            console.log("Delete success", res.data);
            dispatch({type: UPDATE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("Error:", err);
            dispatch({type: UPDATE_FAIL, payload: err.response})
        })
}