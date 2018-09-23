"use strict";
import regionEntity from '~/entities/regions/regionEntity';

const nuxtServerInit = async ({dispatch}, {$axios}) => {
    const {data} = await $axios.get('/location/24865675/');
    console.log(new regionEntity(data));
};

const nuxtClientInit = async ({dispatch}, {app, isMobile, isTablet, isDev, params, query}) => {

};


export const state = () => ({
    regionsList: [],
    countriesList: [],
    citiesList: [],
    baseRegion: {},
    country: {},
    city: {}
});

export const getters = {
    getRegions (state) {
        return state.regionsList;
    },
    getCountries (state) {
        return state.countriesList;
    },
    getCities (state) {
        return state.citiesList;
    },
    getBaseRegion () {
        return state.baseRegion;
    },
    getCountry (state) {
        return state.country;
    },
    getCity (state) {
        return state.city;
    },
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

    /**
     *
     * @param commit
     * @param data
     */
    prepareRegionsList ({commit}, data = []) {


    }
};

export const mutations = {
    SET_REGIONS (state, data) {
        state.regionsList = data;
    },
    SET_COUNTRIES (state, data) {
        state.countriesList = data;
    },
    SET_CITIES (state, data) {
        state.citiesList = data;
    },
    SET_BASE_REGION (state, data) {
        state.baseRegion = data;
    },
    SET_COUNTRY (state, data) {
        state.country = data;
    },
    SET_CITY (state, data) {
        state.city = data;
    }
};
