import path from "./path";
import axios from "../../node_modules/axios";

export default {
  getMessage() {
    return axios.get(`${path.baseUrl}${path.getMessage}`);
  },
  getNewTime() {
    return axios.get(`${path.baseUrl}${path.getNewTime}`);
  },
  postAddMessage(form) {
    return axios({
      method: "post",
      url: `${path.baseUrl}${path.postAddMessage}`,
      data: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
