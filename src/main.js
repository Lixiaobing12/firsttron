
import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueI18n from 'vue-i18n'
import zh from './i18n/zh'
import en from './i18n/en'
import router from './router'
import './utils/rem'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Element)

Vue.config.lang = 'zh-cn'
Vue.locale('zh-cn', zh)
Vue.locale('en', en)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
