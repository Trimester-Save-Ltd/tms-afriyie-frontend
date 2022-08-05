import { SET_VITALS } from "../constant";

const userReducer = (state: any = [], action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_VITALS:
      return [...state, payload];
    default:
      return state;
  }
};

export default userReducer;
