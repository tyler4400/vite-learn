import {
	createRouter,
	createWebHashHistory,
	RouteRecordRaw
} from 'vue-router'

import Home from "../views/Home.vue" // vite来说，后缀.vue不可以省略
import AnotherPage from "../views/AnotherPage.vue" // 也可以使用别名@，不过这里webstorm暂时无法识别


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
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
export default router
