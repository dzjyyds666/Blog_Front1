import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/blog",
    },
    {
      path: "/blog",
      name: "home",
      component: () => import("../views/HomePageView.vue"),
      meta: { isAuth: false },
      children: [
        {
          path: "",
          name: "首页",
          component: () => import("../views/blog/IndexView.vue"),
        },
        {
          path: "search",
          name: "搜索",
          component: () => import("../views/blog/SearchView.vue"),
        },
        {
          path: "message",
          name: "留言墙",
          component: () => import("../views/blog/MessageView.vue"),
        },
        {
          path: "archive",
          name: "归档",
          component: () => import("../views/blog/ArchiveView.vue"),
        },
        {
          path: "type",
          name: "分类",
          component: () => import("../views/blog/TypeView.vue"),
        },
        {
          path:"tydetail/:id",
          name:"type详情页",
          component:()=>import("../views/blog/TypeDetail.vue"),
        }
      ],
    },
    {
      path: "/amsystem",
      name: "后台管理",
      component: () => import("../views/AdminManage.vue"),
      meta: { isAuth: true },
      children: [
        {
          path: "",
          name:"重定向",
          redirect: "amsystem/info",
        },
        {
          path: "info",
          name: "个人信息页",
          component: () => import("../views/backend/Info.vue"),
        },
        {
          path: "blog",
          name: "博客信息页",
          component: () => import("../views/backend/Blog.vue"),
        },
        {
          path: "type",
          name: "分类详情页",
          component: () => import("../views/backend/Type.vue"),
        },
        {
          path: "edit/:id?",
          name: "编辑博客页面", // 给子路由指定一个名称
          component: () => import("../views/backend/BlogEditor.vue"),
        },
        {
          path: "setting",
          name: "杂项设置",
          component: () => import("../views/backend/Settings.vue"),
        },
      ],
    },
    {
      path: "/blog/detail/:id",
      name: "博客详情页",
      component: () => import("../views/blog/BlogDetail.vue"),
      meta: { isAuth: false },
    },
    {
      path: "/login",
      name: "登陆页面",
      meta: { isAuth: false },
      component: () => import("../views/Login.vue"),
    },
  ],
});

// 路由守卫，判断是否登录，如果已登录，则直接放行，反之，跳转到登录页面
router.beforeEach((to, from, next) => {
  //如果路由需要验证登录状态
  if(to.meta.isAuth == true){
    if(localStorage.getItem("token")){
      next()
    }else{
      next("/login")
    }
  }else{
    next()
  }
});

export default router;
