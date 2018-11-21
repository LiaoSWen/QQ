import * as types from './mutation-types'

export default {
  [types.RECEVIVE_DATA](state, data) {
    state.data = data
  },
  [types.CHANGE_NAV_TITLE](state, name) {
    state.headerTitle = state.titleDesc[name]
  },
  [types.REFRESH_AJAX](state, stutas) {
    state.isAjax = stutas
  },
  [types.DELETE_MSG_LIST](state, item) { // 删除指定好友的消息列表
    let record = state.messageList.find(m => m._id === item._id)
    let index = state.messageList.indexOf(record)
    state.messageList.splice(index, 1)
  },
  [types.TOGGLE_CHAT](state, val) { // 显示/隐藏 聊天页面
    state.chat = val
  },
  [types.TOGGLE_SETDRAWER](state, val) { // 显示/隐藏 侧边栏
    state.setDrawer = val
  },
  [types.RECEVIVE_CURRENT_USER](state, user) {
    state.currentUser = user
    // 根据user查询当前聊天数据队列,将队列中的所有消息的read改为true
    let record = state.messageList.find(m => m._id === user._id)
    record.list.forEach(m => {
      m.read = true
    })
    state.currentMsgList = record
  },
  [types.ADD_MESSAGE](state, {msg, time, self}) {
    state.currentMsgList.list.push({
      msg,
      time,
      self,
      read: true
    })
  }
}
