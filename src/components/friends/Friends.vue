<template>
  <div class="friends" ref="friends">
    <div>
      <SearchBar></SearchBar>
      <split></split>
      <mu-divider></mu-divider>
      <mu-list>
        <mu-list-item button ripple>
          <mu-list-item-title>新朋友</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item button ripple>
          <mu-list-item-title>创建群组</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chevron_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <mu-divider></mu-divider>
      <split></split>
      <mu-tabs class="tabs" :value.sync="tab" inverse color="#2196f3" indicator-color="#2196f3" full-width>
        <mu-tab>好友</mu-tab>
        <mu-tab>群聊</mu-tab>
        <mu-tab>设备</mu-tab>
        <mu-tab>通讯录</mu-tab>
        <mu-tab>公众号</mu-tab>
      </mu-tabs>
      <mu-divider></mu-divider>
      <FriendsList v-if="tab === 0"></FriendsList>
      <div class="demo-text" v-if="tab === 1">
        <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
        <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
        <p>“那么就去地狱找到你，我绝对不逃！”</p>
        <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
      </div>
      <div class="demo-text" v-if="tab === 2">
        设备
      </div>
      <div class="demo-text" v-if="tab === 3">
        通讯录
      </div>
      <div class="demo-text" v-if="tab === 4">
        公众号
      </div>
    </div>
  </div>
</template>

<script>
  import SearchBar from '../searchBar/SearchBar'
  import Split from '../widget/Split'
  import FriendsList from './FriendsList'
  import BScroll from 'better-scroll'

  export default {
    name: 'Friends',
    mounted() {
      this.$nextTick(() => {
        this.friendScroll = new BScroll(this.$refs.friends, {
          click: true
        })
      })
    },
    data() {
      return {
        tab: 0
      }
    },
    components: {
      FriendsList,
      SearchBar,
      Split
    }
  }
</script>

<style scoped>
  .friends {
    position: fixed;
    left: 0;
    right: 0;
    top: 56px;
    bottom: 56px;
    overflow: hidden;
  }

  .tabs .mu-tab {
    font-size: 12px;
    min-width: 30px !important;
  }
</style>
