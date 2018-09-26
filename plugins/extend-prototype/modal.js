'use strict';
import Vue from 'vue';
import Bus from '~/plugins/bus/bus';

Vue.prototype.$modal = new Vue({
    name: '$modal',
    methods: {
        open (options) {
            Bus.$emit('CREATE_MODAL', options);
        },
        close (data = null) {
            Bus.$emit('CLOSE_MODAL', data);
        },
        dismiss (index = null) {
            Bus.$emit('DISMISS_MODAL', index);
        }
    }
});
