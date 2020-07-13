import Vue from 'vue'
import App from './App'
import { myRequest } from './require.js'
Vue.config.productionTip = false

Vue.prototype.$myRequest = myRequest
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
