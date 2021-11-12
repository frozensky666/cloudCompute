import Vue from "vue";
import VueRouter from "vue-router";

const Error = () => import("@/components/content/Error");
const Home = () => import("@/views/Home");
const Ranking = () => import("@/views/Ranking");




Vue.use(VueRouter);

const routes = [
  {
    path: '/error',
    component: Error
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/ranking',
    component: Ranking
  },
// -----------------------未找到页面-----------------------------
  {
    path: '*',
    redirect: '/error'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
