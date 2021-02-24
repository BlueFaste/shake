import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
  },
  {
    path: '/recette/:name',
    name: 'Recette',
    component: () => import(/* webpackChunkName: "about" */ '../views/Recipe.vue')
  },
  {
    path: '/recettes/all',
    name: 'AllRecipes',
    component: () => import(/* webpackChunkName: "about" */ '../views/AllRecipes.vue')
  },
  {
    path: '/findyourcocktail',
    name: 'FindYourCocktail',
    component: () => import(/* webpackChunkName: "about" */ '../views/FindCocktail.vue')
  },
  {
    path: '/suggestyourcocktail',
    name: 'SuggestYourCocktail',
    component: () => import(/* webpackChunkName: "about" */ '../views/SuggestCocktail.vue')
  },
  {
    path: '/pc/',
    name: 'HomePc',
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
