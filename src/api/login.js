import path from "./path";
import axios from "../../node_modules/axios";

export default {
  postLogin(form) {
    return axios({
      method: "post",
      url: `${path.baseUrl}${path.login}`,
      data: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  getLogout(){
    return axios.get(`${path.baseUrl}${path.logout}`,{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("token")
      }
    })
  }
};
