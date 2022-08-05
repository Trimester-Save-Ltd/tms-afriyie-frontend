export const getToken = () => {
    const token = localStorage.getItem("token");
    return token || "";
  };
  
  export const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };
  
export const getUser = () => {
    const user = localStorage.getItem("user");
    return user || "";
  };
  
  export const setUser = (user: string) => {
    localStorage.setItem("user", user);
  };

  export const clearUser = () => {
    localStorage.removeItem("user");
  };