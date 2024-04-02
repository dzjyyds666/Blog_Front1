import path from "./path";
import axios from "../../node_modules/axios";

export default {
  getTypeInfo() {
    return axios.get(`${path.baseUrl}${path.getTypeInfo}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  },
  getSearchType(typeName){
    return axios.get(`${path.baseUrl}${path.getSearchType}`,{
        params:{typeName:typeName},
        headers:{
            Authorization:"Bearer "+localStorage.getItem("token"),
        }
    })
  },
  getChangeTypeName(id,typeName){
    return axios.get(`${path.baseUrl}${path.getchangeTypeName}`,{
        params:{
            id:id,
            typeName:typeName
        },
        headers:{
            Authorization:"Bearer "+localStorage.getItem("token"),
        }
    })
  },
  getAddType(typeName){
    return axios.get(`${path.baseUrl}${path.getAddType}`,{
        params:{typeName},
        headers:{
            Authorization:"Bearer "+localStorage.getItem("token"),
        }
    })
  },
  postDeleteType(form){
    return axios({
        method:"post",
        url:`${path.baseUrl}${path.postDeleteType}`,
        data:JSON.stringify(form),
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
    })
  },
  getSearch(search){
    return axios.get(`${path.baseUrl}${path.getSearchT}`,{
      params:{search}
    })
  },
  getFrontType(){
    return axios.get(`${path.baseUrl}${path.getTypeFront}`);
  },
  getTypeById(id){
    return axios.get(`${path.baseUrl}${path.getTypeById}`,{
      params:{id}
    })
  }
};
