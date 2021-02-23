import Vue from 'vue'
import Vuex from 'vuex'
import { test } from './test'
import { squareImgLink } from './squareImgLink'
import { recipes } from './recipes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    test,
    squareImgLink,
    recipes,

  }
})
