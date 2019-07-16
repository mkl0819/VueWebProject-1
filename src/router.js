import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import PostPage from './views/PostPage.vue'
import PortfolioPage from './views/PortfolioPage.vue'
import LoginPage from './views/LoginPage.vue'
import AboutusPage from './views/AboutusPage.vue'
import FirebaseService from './services/FirebaseService'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
      beforeEnter(to, from, next){
        FirebaseService.updateViewPageCount(to.name);
        next();
      }
		},
		{
			path: '/post',
			name: 'post',
			component: PostPage,
      beforeEnter(to, from, next){
        FirebaseService.updateViewPageCount(to.name);
        next();
      }
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: PortfolioPage,
      beforeEnter(to, from, next){
        FirebaseService.updateViewPageCount(to.name);
        next();
      }
		},
		{
			path: '/login',
			name: 'login',
			component: LoginPage,
      beforeEnter(to, from, next){
        FirebaseService.updateViewPageCount(to.name);
        next();
      }
		},
    {
			path: '/aboutus',
			name: 'aboutus',
			component: AboutusPage,
      beforeEnter(to, from, next){
        FirebaseService.updateViewPageCount(to.name);
        next();
      }
		}
  ]
})
