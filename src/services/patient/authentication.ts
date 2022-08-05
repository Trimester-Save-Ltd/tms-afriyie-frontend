import axios from "axios";
import URL from "../../helpers/URL"

class Authentication {
  authenticated: boolean;
  constructor() {
    this.authenticated = false;
  }

  LoginPatient(data: any, cb: any, failedCb: any) {
    axios
      .post(URL.loginPatient, data, { timeout: 100000 })
      .then((res) => {
        this.authenticated = true;
        const { data } = res;
        cb(data.result);
      })
      .catch((err) => {
        failedCb(err);
      });
  }

  RegisterPatient(data: any, cb: any, failedCb: any) {
    axios
      .post(URL.registerPatient, data, { timeout: 100000 })
      .then(res => {
        this.authenticated = true;
        cb(data.phone);
      })
      .catch((err) => {
        failedCb(err);
      });
  }

  ForgetPassword(data: any) {
    return axios
      .patch(URL.forgotPassword, data, { timeout: 100000 })
  }

  VerifyCode(data: any) {
    return axios
      .patch(URL.verifyPhone, data, { timeout: 100000 })
  }

  ResendCode(data: any) {
    return axios
      .post(URL.resendCode, data, { timeout: 100000 })
  }

  ResetPassword(code:any,data: any) {
    return axios.patch(URL.resetPassword +'?code='+ code , data, {timeout: 100000})
  }

//   Logout() {
//     axios.post(URL.logout, { timeout: 100000 }).then((res) => {
//       localStorage.removeItem("token");
//       this.authenticated = false;
//     });
//   }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Authentication();
