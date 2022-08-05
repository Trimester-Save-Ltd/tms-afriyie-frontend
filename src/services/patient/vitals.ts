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
  

export const addVital = (data: any) => {
    let config = configuration();
    return axios.post(URL.addVital, data, config);
};

export const getVitalById = (id:any)=> {
  let config = configuration();
  return axios.get(URL.getVital+id, config);
}

export const getVital = ()=> {
  let config = configuration();
  return axios.get(URL.getVital, config);
}

export const getVitals = ()=> {
    let config = configuration();
    return axios.get(URL.getVitals, config);
  }