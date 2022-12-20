import Vue from 'vue'
import App from './App.vue'
//参数1：字符串格式，表示组件的“注册名字”
//参数2：需要被注册的那个组件



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

