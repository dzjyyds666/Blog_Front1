import path from "./path";
import axios from "../../node_modules/axios";

export default{
    postEdit(form){
        return axios({
            method: "post",
            url: `${path.baseUrl}${path.postEdit}`,
            data: JSON.stringify(form),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
    },
    getContent(name){
      return axios.get(`${path.baseUrl}${path.getContent}`, {
        params: { name },
      });
    }
} 