import axios from "axios";
import URL from "../../helpers/URL";
import { getToken } from "../../helpers/utilities"


const configuration = () => {
    const token = getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return config;
  };


export const createBudget = (data:any) => {
    const config = configuration()
    return axios.post(URL.createBudget, data, config)
}

export const getBudgets = () => {
    const config = configuration()
    return axios.get(URL.getBudgets, config)
}