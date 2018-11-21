import * as types from './mutation-types'

export default {
  async getAllData({commit}, axios) {
    commit(types.REFRESH_AJAX, true) // 正在请求
    let self = await axios.get('/api/self')
    let friends = await axios.get('/api/friends')
    self = self.data.data
    friends = friends.data.data
    commit(types.RECEVIVE_DATA, {self, friends})
    commit(types.REFRESH_AJAX, false) // 请求完毕
  },
  deleteMsg({commit}, item) {
    commit(types.DELETE_MSG_LIST, item)
  },
  showChat({commit}, user) {
    // 修改当前聊天用户信息
    commit(types.RECEVIVE_CURRENT_USER, user)
    commit(types.TOGGLE_CHAT, true)
  },
  // 将action 封装成以一个promise以后，当该action执行完毕后会调用resolve方法
  // 外部调用该action函数可以通过then回调函数确保当前action执行完毕
  sendMyMsg({commit}, payload) {
    return new Promise(resolve => {
      commit(types.ADD_MESSAGE, payload)
      resolve()
    })
  },
  sendNewMsg({commit}, payload) {
    return new Promise(resolve => {
      // 做网络请求,将发送的内容发送给好友,并等待好友消息回调
      let query = `?id=${payload.id}&msg=${payload.msg}`
      payload.axios.get('/api/robot' + query)
        .then((msgData) => {
          // console.log(msgData.data)
          // 获取到回调数据时,
          let time = new Date().getTime()
          let msg = JSON.parse(msgData.data.data)
          msg = msg.text
          commit(types.ADD_MESSAGE, {msg, time})
          resolve()
        })
    })
  }
}
