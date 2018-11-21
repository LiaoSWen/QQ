<template>
  <div class="msg-content">
    <div class="msg" :class="{self: item.self}" v-for="item in msgList" :key="item.time">
      <div class="avatar">
        <img width="100%" height="100%" :src="item.self? self.avatar:user.avatar"/>
      </div>
      <div class="bubble">
        {{item.msg}}
      </div>
    </div>
    <a ref="bottom"></a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'MsgContent',
    props: ['user'],
    computed: {
      ...mapState({
        msgList: state => state.currentMsgList.list,
        self: state => state.data.self
      }),
      bottom() {
        return this.$refs.bottom
      }
    }
  }
</script>

<style scoped>
  .msg-content .msg {
    width: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 0;
  }

  .msg .avatar {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background: white;
  }

  .msg .bubble {
    display: inline-block;
    vertical-align: top;
    margin-left: 5px;
    padding: 10px 10px 10px 5px;
    border-radius: 4px;
    line-height: 20px;
    max-width: 50%;
    word-wrap: break-word;
    font-size: 14px;
    background: #fff;
  }

  .msg.self {
    text-align: right;
  }

  .msg.self .avatar {
    float: right;
    margin-left: 5px;
  }

  .msg.self .bubble {
    background: #4dace7;
    text-align: left;
    color: white;
    padding: 10px 5px 10px 10px;
  }
</style>
