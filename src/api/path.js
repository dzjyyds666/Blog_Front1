const path = {
    baseUrl: "http://localhost:8081",//后端路径

    // user
    login:"/admin/login",//登录
    logout:"/admin/logout",//注销

    getUserInfo:"/admin/getInfo",//获取用户信息
    postEditInfo:"/admin/editinfo",//编辑用户信息

    //blog
    getBlogInfo:"/blog/getBlog",//获取博客列表信息
    postDeleteBlog:"/blog/deleteBlog",//批量删除博客信息
    getBlogById:"/blog/getById",//根据博客id获取博客信息
    postSearchBlog:"/blog/searchBlog",//根据搜索信息搜索博客
    postEditBlog:"/blog/editBlog",//编辑博客


    //type
    getTypeInfo:"/type/getType",//获取分类信息
    getSearchType:"/type/searchType",//根据分类名搜索
    getchangeTypeName:"/type/changeName",//修改分类名
    getAddType:"/type/addType",//添加分类
    postDeleteType:"/type/deleteType",//删除分类

}

export default path