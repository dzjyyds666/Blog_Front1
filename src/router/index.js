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
          path: "tydetail/:type?",
          name: "分类详情页",
          component: () => import("../views/blog/TypeDetail.vue"),
        },
      ],
    },
    {
      path: "/amsystem",
      name: "后台管理",
      component: () => import("../views/AdminManage.vue"),
      children: [
        
      ],
    },
    {
      path: "/blog/detail/:id?",
      name: "博客详情页",
      component: () => import("../views/blog/BlogDetail.vue"),
    },
  ],
});

export default router;

// {
//   path: "/amsystem",
//   name: "后台管理系统",
//   component: () => import("../views/AdminManage.vue"),
//   children: [
//     {
//       path: "",
//       name: "首页",
//       component: () => import("../views/admin/AdminIndex.vue"),
//     },
//     {
//       path:"bloginfo",
//       name:"博客信息",
//       component:()=>import('../views/admin/BlogInfo.vue'),
//     },
//     {
//       path:"TypeInfo",
//       name:"分类信息",
//       component:()=>import('../views/admin/TypeInfo.vue'),
//     }
//   ],
// },
// {
//   path: "/blog/detail/:id?",
//   name: "博客详情页",
//   component: () => import("../views/blog/BlogDetail.vue"),
// },
