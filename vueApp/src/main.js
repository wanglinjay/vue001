import Vue from 'vue';
import Axios from "axios";
Vue.prototype.$ajax=Axios;
// 引入ui框架
import './css/index.css'
import MintUi from 'mint-ui';
Vue.use(MintUi);
import "mint-ui/lib/style.css";
import "./static/vendor/mui-master/dist/css/mui.css";

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from "./app.vue";
import Home from "./components/home.vue";
import List from "./components/list/list.vue";
import Lib from "./components/list/lib.vue";
import Methods from "./components/list/methods.vue";
import Characters from "./components/list/characters.vue";
import Size from "./components/list/size.vue";

let router=new VueRouter({
	linkActiveClass:"mui-active"
});
router.addRoutes([
		{path:"/",redirect:{name:'home'}},
		{name:'home',path:"/home",component:Home},
		{name:'list',path:'/list',component:List},
		{name:'lib',path:'/lib',component:Lib},
		{name:'methods',path:'/methods',component:Methods},
		{name:'Character',path:'/Charcter',component:Characters},
		{name:"Character.size",path:'/size',component:Size}
	

	]);

new Vue({
	el:"#app",
	router,
	render:c=>c(App)
})
