import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  data: [],
};

const fetchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.FETCHDATA:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};

export default fetchReducer;
