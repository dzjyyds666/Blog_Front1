import path from "./path";
import axios from "../../node_modules/axios";

export default {
  postAddComment(form) {
    return axios({
      method: "post",
      url: `${path.baseUrl}${path.postAddComment}`,
      data: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getComment(id){
    return axios.get(`${path.baseUrl}${path.getCommentByBlogId}`,{
      params:{id}
    })
  }
};
