import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Recipe from './views/Recipe.vue';
import Explore from './views/Explore.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe,
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
