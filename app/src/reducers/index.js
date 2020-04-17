import { GRAB_DATA, GRAB_SUCCESSFUL, GRAB_FAILURE } from "../actions";

const initialState = {
  characterInfo: [],
  isFetching: false,
  error: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GRAB_DATA:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case GRAB_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        error: "",
        characterInfo: action.payload
      };
    case GRAB_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};