import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        breadeList: {},
        title:'未知'
    },
    mutations: {
        setBreadList(state, item) {
            state.breadeList = item
        },
        default_title(state,item){
            state.title=item
        }
    },
    actions: {

    }
})