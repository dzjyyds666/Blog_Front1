const path = {
    baseUrl: "http://localhost:8081",//后端路径

    // user
    login:"/admin/login",//登录
    logout:"/admin/logout",//注销

    getUserInfo:"/admin/getInfo",//获取用户信息
    postEditInfo:"/admin/editinfo",//编辑用户信息
    getUser:"/admin/front/getUser",//首页获取用户

    //blog
    getBlogInfo:"/blog/getBlog",//获取博客列表信息
    postDeleteBlog:"/blog/deleteBlog",//批量删除博客信息
    getBlogById:"/blog/getById",//根据博客id获取博客信息
    postSearchBlog:"/blog/searchBlog",//根据搜索信息搜索博客
    postEditBlog:"/blog/editBlog",//编辑博客
    postAddBlog:"/blog/addBlog",//添加博客
    getBlogInfoPage:"/blog/front/getBlogPage",//分类查找博客列表信息
    getBlogNumber:"/blog/front/getBlogNum",//获取博客数量
    getSearchB:"/blog/front/search",//前台查找分类
    getArchive:"/blog//front/archive",//获取归档年份
    getArchiveBlog:"/blog/front/archiveBlog",//获取博客
    getBlogDetail:"/blog/front/blogDetail",//获取博客详情信息
    getByTypeId:"/blog/front/getByTypeId",//根据分类id查询


    //type
    getTypeInfo:"/type/getType",//获取分类信息
    getSearchType:"/type/searchType",//根据分类名搜索
    getchangeTypeName:"/type/changeName",//修改分类名
    getAddType:"/type/addType",//添加分类
    postDeleteType:"/type/deleteType",//删除分类
    getSearchT:"/type/front/search",//前台查找分类
    getTypeFront:"/type/front/getType",//前台查找分类
    getTypeById:"/type/front/getByTypeId",//根据id查找分类

    //设置
    postEdit:"/settings/edit",
    getContent:"/settings/front/getContent",//获取设置类的内容


    //留言板
    getMessage:"/messageboards/front/getComment",//获取留言板留言
    getNewTime:"/messageboards/front/getNewtime",//获取最新时间
    postAddMessage:"/messageboards/front/addComment",//添加留言


    //评论
    postAddComment:"/comments/front/addComment",//添加评论
    getCommentByBlogId:"/comments/front/getComment",//获取评论,
}

export default path