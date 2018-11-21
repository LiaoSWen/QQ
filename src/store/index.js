import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  chat: false,
  setDrawer: false,
  currentUser: {}, // 当前聊天用户
  currentMsgList: {}, // 当前聊天用户的 聊天记录
  data: {
    self: {},
    friends: []
  },
  headerTitle: '',
  titleDesc: {
    message: '消息',
    friends: '联系人',
    discover: '发现'
  },
  isAjax: false, // 判断是否正在请求网络数据
  // 消息列表
  messageList: [
    {
      _id: 1,
      list: [
        {msg: '你可以和我聊天', time: 1541051132303, read: false},
        {msg: '你今年几岁?', time: 1541051432303, read: false},
        {msg: '我今天80大寿', time: 1541051832303, read: true, self: true}
      ]
    }, // 五天以前 展示 日期 10-12
    {_id: 2, list: [{msg: '我会讲笑话', time: 1542002394524, read: true}]}, // 昨天
    {_id: 3, list: [{msg: '在吗?', time: 1542072369522, read: false}]}, // 当前 展示时间          上午7:03
    {_id: 4, list: [{msg: '吃了吗?', time: 1541900394524, read: false}]} // 五天以内 展示星期几      星期天
  ]
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
