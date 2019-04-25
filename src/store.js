import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        breadeList: {}
    },
    mutations: {
        setBreadList(state, item) {
            state.breadeList = item
        }
    },
    actions: {

    }
})