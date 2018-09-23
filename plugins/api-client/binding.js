'use strict';
import Vue from 'vue';
import axios from './creating';

if (!Vue.prototype.$axios) {
  Vue.prototype.$axios = axios;
  Vue.prototype.$axios.setHeader = function (name, value, scope = 'common') {
    if (!value) {
      delete Vue.prototype.$axios.defaults.headers[scope][name];
      return;
    }
    Vue.prototype.$axios.defaults.headers[scope][name] = value;
  };
}

export default function (ctx) {
  if (!ctx.$axios) {
    ctx.$axios = Vue.prototype.$axios;
  }
  if (!ctx.app.$axios) {
    ctx.app.$axios = Vue.prototype.$axios;
  }
  if (ctx.store && !ctx.store.$axios) {
    ctx.store.$axios = Vue.prototype.$axios;
  }
}
