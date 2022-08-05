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

export const updateUserProfile = (data:any) => {
    const config = configuration()
    return axios.patch(URL.updatePatient, data, config)
}

export const getUserProfile = () => {
    const config = configuration()
    return axios.get(URL.getUserProfile, config)
}