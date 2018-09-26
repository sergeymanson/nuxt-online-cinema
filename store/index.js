"use strict";
import {moviesEntity} from '~/entities/movies/moviesEntity.js';
import {serialsEntity} from '~/entities/serials/serialsEntity.js';

const nuxtServerInit = async ({dispatch}, {$axios}) => {

};

const nuxtClientInit = async ({dispatch}, {app, isDev, params, query}) => {

};

export const state = () => ({
    movies: [],
    serials: []
});

export const getters = {
    getMovies (state) {
        return moviesEntity.mutateCollection(state.movies);
    },
    getSerials (state) {
        return serialEntity.mutateCollection(state.serials);
    }
};

export const actions = {
    /**
     *
     * APP Server init store
     */
    nuxtServerInit,

    /**
     * APP Client init store
     */
    nuxtClientInit,


    prepareMovies ({commit}, data = []) {
        commit('SET_MOVIES', data);
    },

    prepareSerials ({commit}, data = []) {
        commit('SET_SERIALS', data);
    }
};

export const mutations = {
    SET_MOVIES (state, data) {
        state.movies = data;
    },
    SET_SERIALS (state, data) {
        state.serials = data;
    }
};
