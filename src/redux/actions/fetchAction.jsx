import { GLOBALTYPES } from "./globalTypes";

// passing the data
export const fetchData = (data) => (dispatch) => {
  dispatch({ type: GLOBALTYPES.FETCHDATA, payload: data });
};
