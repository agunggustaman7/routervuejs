import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/product",
      name: "product",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Product.vue")
    },
    {
      path: "/tasks",
      name: "tasks",
      component: () =>
      import("./views/Tasks.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () =>
      import("./views/Blog.vue")
    }
  ]
});
