import { createRouter, createWebHistory, } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from "../views/Home.vue" // vite来说，后缀.vue不可以省略
import AnotherPage from "../views/AnotherPage.vue"


const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: '/',
		redirect: '/Home'
	},
	{
		path: '/Home',
		name: 'Home',
		component: Home,
	},
	{
		path: '/AnotherPage',
		name: 'AnotherPage',
		component: AnotherPage
	},
	{
		path: '/LazyLoadPage',
		name: 'LazyLoadPage',
		component: () => import('@/views/LazyLoadPage.vue') // 懒加载组件
	},
  // 兜底
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../components/NotFound.vue'),
  }
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router
