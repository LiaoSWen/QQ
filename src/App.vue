<template>
  <div id="app">
    <div class="content-top">
      <top-nav></top-nav>
    </div>
    <router-view/>
    <div class="tabbar">
      <bottom-tab></bottom-tab>
    </div>
    <!--聊天页面-->
    <chat-view v-if="chat"></chat-view>
    <!--侧边抽屉栏-->
    <SettingDrawer></SettingDrawer>
    <!--用户详情页面-->
    <detail-view></detail-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import TopNav from './components/topnav/TopNavigation'
  import BottomTab from './components/bottomTab/BottomTab'
  import ChatView from './components/chatView/ChatView'
  import SettingDrawer from './components/settingDrawer/SettingDrawer'
  import DetailView from './components/detailView/DetailView'

  export default {
    name: 'App',
    computed: mapState({allData: 'data', chat: 'chat'}),
    components: {
      TopNav,
      BottomTab,
      ChatView,
      DetailView,
      SettingDrawer
    }
  }
</script>

<style>
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
