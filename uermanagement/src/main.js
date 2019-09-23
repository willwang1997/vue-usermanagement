import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'


import Customers from './components/Custerme.vue'
import About from './components/About.vue'
import Addcustomer from './components/Addcus.vue'
import CustomersDetail from './components/customerDetail.vue'
import Edit from './components/edit.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vueResource)
// 设置路由
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: Customers

    },
    {
      path: "/about",
      component: About

    },
    {
      path: "/add",
      component: Addcustomer
    },
    {
      path: "/customer/:id",
      component:CustomersDetail
    },
    {
      path:"/edit/:id",
      component:Edit
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
