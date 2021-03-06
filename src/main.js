// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Axios from 'axios'
import store from './store/store'
import vuexaxi from 'vue-axios'

Vue.use(Vuex);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    Axios,
    vuexaxi,
    store,
    components: {App},
    template: '<App/>'
});
