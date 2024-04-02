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
  postDeleteBlog(form) {
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
  getBlogById(id) {
    return axios.get(`${path.baseUrl}${path.getBlogById}`, {
      params: { id },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  postSearchBlog(form) {
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
  postEditBlog(form) {
    return axios({
      method: "post",
      url: `${path.baseUrl}${path.postEditBlog}`,
      data: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  postAddBlog(form) {
    return axios({
      method: "post",
      url: `${path.baseUrl}${path.postAddBlog}`,
      data: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  getBlogInfoPage(offset, limit) {
    return axios.get(`${path.baseUrl}${path.getBlogInfoPage}`, {
      params: { offset,limit },
    });
  },
  getBlogNumber(){
    return axios.get(`${path.baseUrl}${path.getBlogNumber}`);
  },
  getSearch(search){
    return axios.get(`${path.baseUrl}${path.getSearchB}`,{
      params:{search}
    })
  },
  getArchive(){
    return axios.get(`${path.baseUrl}${path.getArchive}`);
  },
  getArchiveBlog(){
    return axios.get(`${path.baseUrl}${path.getArchiveBlog}`);
  },
  getBlogDetail(id){
    return axios.get(`${path.baseUrl}${path.getBlogDetail}`,{
      params:{id}
    })
  },
  getByTypeId(id,current,pagesize){
    return axios.get(`${path.baseUrl}${path.getByTypeId}`,{
      params:{id,current,pagesize}
    })
  }
};
