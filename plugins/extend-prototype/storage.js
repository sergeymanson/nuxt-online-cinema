'use strict';
const Storage = {
    /**
     *
     * @param {String} name
     * @returns {Boolean}
     */
    checkItem (name) {
        try {
            return window.localStorage.hasOwnProperty(name);
        } catch (e) {
            console.error(e);
        }
    },
    /**
     *
     * @param {String} name
     * @returns {*}
     */
    getItem (name) {
        try {
            let res = null;

            if (window.localStorage.hasOwnProperty(name)) {
                res = JSON.parse(window.localStorage.getItem(name));
            }
            return res;
        } catch (e) {
            console.error(`${name} was not found in window.localStorage`);
        }
    },
    setItem (name, value) {
        try {
            let res = false;

            window.localStorage.setItem(name, JSON.stringify(value));
            if (window.localStorage.hasOwnProperty(name)) {
                res = true;
            }
            return res;
        } catch (e) {
            console.error(e);
        }
    },
    removeItem (name) {
        try {
            let res = false;

            window.localStorage.removeItem(name);
            if (!window.localStorage.hasOwnProperty(name)) {
                res = true;
            }
            return res;
        } catch (e) {
            console.error(e);
        }
    }
};

export default function ({app, store}) {
    app.$storage = Storage;
    if (store) store.$storage = app.$storage;
}

