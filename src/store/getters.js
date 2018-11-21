export const msgViewList = (state) => { // 所有消息列表
  let result = []
  let friends = state.data.friends
  if (!friends.length) { // 没有好友
    return []
  }
  // 遍历消息列表获取给你发过信息的好友
  state.messageList.forEach(item => {
    // 获取当前聊天信息的好友信息
    let friendData = friends.find(f => f._id === item._id)
    // 获取未读消息的数量,和最后一条消息
    let unreadNum = 0
    let lastMsg = {}
    item.list.forEach(m => {
      if (!m.read) {
        unreadNum++
      }
      lastMsg = m
    })
    result.push({
      ...friendData,
      unreadNum,
      lastMsg
    })
  })
  return result
}

export const friendsList = (state) => { // 所有好友,获取所有好友的最后一条消息和未读数量
  /*
  let result = []
  state.data.friends.forEach(item => { // 遍历所有好友
    let msg = state.messageList.find(m => m._id === item._id) // 根据当前好友的id获取其对应的聊天消息
    let unreadNum = 0
    let lastMsg = 0
    if (msg) {
      msg.list.forEach(i => { // 遍历当前好友的所有聊天消息 计算其消息中的未读数量和最后一条消息
        !i.read && unreadNum++ // i.read 为false时 执行后面的js表达式
        lastMsg = i
      })
    }
    result.push({
      ...item,
      unreadNum,
      lastMsg
    })
  })
*/
  return state.data.friends
}
/* export const currentMsgList = state => {
  let id = state.currentUser._id
  if (!id) {
    // 一开始是没有选择跟谁聊天,currentUser为空,返回一个空数组(避免报错)
    return {}
  }

  return state.messageList.find(f => f._id === id)
}
*/
