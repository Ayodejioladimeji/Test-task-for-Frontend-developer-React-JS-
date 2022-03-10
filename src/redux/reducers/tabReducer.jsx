import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = 1;

const tabReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GLOBALTYPES.TAB:
      return payload;
    default:
      return state;
  }
};

export default tabReducer;
