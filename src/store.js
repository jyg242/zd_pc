import Vue from 'vue'
import Vuex from 'vuex'
import serviceApi from '../src/api/axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        breadeList: {},//面包屑数据
        title: '未知',//修改页新闻标题
        banner_images: [], //图片信息
        index_news: [],//首页新闻新闻信息
        company_news: []//公司新闻
    },
    mutations: {
        setBreadList(state, item) {
            state.breadeList = item
        },
        default_title(state, item) {
            state.title = item
        },
        //存储图片信息
        setImages(state, item) {
            let res = item.filter(item => item.TYPE == '1') //1 为轮播
            let banner_res = res
            banner_res.map(item => state.banner_images.push(item))
        },
        //存储新闻
        setNews(state, item) {
            //存储首页新闻标题
            let res = item.map(item => {
                return {
                    title: item.TITLE,
                    id: item._id
                }
            })
            res.forEach(item => {
                state.index_news.push(item)
            });
            //存储公司新闻
            let res_company = item.filter(item => item.TYPE == '1')
            console.log(res_company)
            res_company.map(item => state.company_news.push(item))
        },
        //存储新闻
        //     setNews_all(state, item) {
        //         let res=item.filter(item=>item.TYPE == '1')//1为公司新闻
        //         res.map(item=>state.company_news.push(item))
        //     }
    },
    actions: {
        async setAllimages({ commit }) { //获取图片信息
            let { status, data } = await serviceApi.get('/banner/getImg')
            if (status == 200) {
                let res = data.data
                commit('setImages', res)
            }
        },
        async setAllnews({ commit }) {
            let { status, data } = await serviceApi.get('/news/getNews', { params: { key: 0 } })
            if (status == 200) {
                let res = data.data
                commit('setNews', res)
                console.log(res)
            }
        }
    }
})