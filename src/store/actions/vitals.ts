import { SET_VITALS } from "../constant";

export const setVitals= (vitals: any) => (dispatch: any) => {
  dispatch({
    type: SET_VITALS,
    payload: vitals,
  });
};

