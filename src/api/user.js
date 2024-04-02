import path from "./path";
import axios from "../../node_modules/axios";

export default {
  getUserInfo() {
    return axios.get(`${path.baseUrl}${path.getUserInfo}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  postEditInfo(form){
    return axios({
      method: "post",
      url: `${path.baseUrl}${path.postEditInfo}`,
      data: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
  },
  getUser(){
    return axios.get(`${path.baseUrl}${path.getUser}`);
  },
  
};
