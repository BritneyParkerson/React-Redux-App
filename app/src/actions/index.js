import axios from "axios";

export const GRAB_DATA = "GRAB_DATA";
export const GRAB_SUCCESSFUL = "GRAB_SUCCESSFUL";
export const GRAB_FAILURE = "GRAB_FAILURE";

export const fetchRecipes = () => {
  return dispatch => {
    dispatch({ type: GRAB_DATA });

    axios
      .get("http://www.recipepuppy.com/api")
      .then(response =>
        dispatch({ type: GRAB_SUCCESSFUL, payload: response.data })
      )
      .catch(err => dispatch({ type: GRAB_FAILURE, payload: err.response }));  
  };
};