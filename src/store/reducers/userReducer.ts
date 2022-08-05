import { SET_USER, CLEAR_USER } from "../constant";

const userReducer = (state: any = {}, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return payload;
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
