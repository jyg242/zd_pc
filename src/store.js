import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        breadeList: {},//面包屑数据
        title:'未知',//新闻标题
        banner_images:[], //图片信息
        news:{},//新闻信息
    },
    mutations: {
        setBreadList(state, item) {
            state.breadeList = item
        },
        default_title(state,item){
            state.title=item
        },
        //存储图片信息
        setImages(state,item){
            let res=item.filter(item=>item.TYPE=='1')
            let new_res=res
            // this.state.banner_images.push(new_res[0])
        }
    },
    actions: {
        setAllimages({commit},item){
            commit('setImages',item)
        }
    }
})