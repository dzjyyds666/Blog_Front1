import path from "./path";
import axios from "../../node_modules/axios";

export default {
  getBlogInfo() {
    return axios.get(`${path.baseUrl}${path.getBlogInfo}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  postDeleteBlog(form){
    return axios({
      method: "post",
      url: `${path.baseUrl}${path.postDeleteBlog}`,
      data: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  getBlogById(id){
    return axios.get(`${path.baseUrl}${path.getBlogById}`,{
      params:{id},
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
  },
  postSearchBlog(form){
    return axios({
      method: "post",
      url: `${path.baseUrl}${path.postSearchBlog}`,
      data: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  postEditBlog(form){
    return axios({
      method: "post",
      url: `${path.baseUrl}${path.postEditBlog}`,
      data: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
};
