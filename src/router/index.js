import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ()=>import('../views/Home.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: ()=>import('../views/Login.vue'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/register",
    name: "Register",
    component: ()=>import('../views/Register.vue'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path:"/shopinfo",
    name:"ShopInfo",
    component: ()=>import('../views/ShopInfo.vue'),
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: "Login" });
});

export default router;
