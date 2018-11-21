<template>
  <div class="message">
    <SearchBar></SearchBar>
    <div v-if="ajax">加载中</div>
    <mu-list textline="two-line" v-else>
      <div v-for="item in friends" class="list" :key="item._id">
        <v-touch @tap="itemClick(item)" @swipeleft="onSwipeLeft(item._id)"
                 @swiperight="cancelSwipe">
          <mu-list-item class="item" :class="{remove: item._id===removeId}" avatar button ripple>
            <mu-list-item-action>
              <mu-avatar :size="30" slot="left">
                <img :src="item.avatar">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{item.name}}</mu-list-item-title>
              <mu-list-item-sub-title>{{item.lastMsg.msg}}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action class="desc">
              <mu-list-item-title><span class="time">{{item.lastMsg.time|getTime}}</span></mu-list-item-title>
              <mu-list-item-sub-title>
                <mu-badge color="red" :content="item.unreadNum+''" v-show="item.unreadNum"></mu-badge>
              </mu-list-item-sub-title>
            </mu-list-item-action>
          </mu-list-item>
        </v-touch>
        <div class="delete-btn" @click="deleteMsg(item)">
          删除
        </div>
      </div>
    </mu-list>
  </div>
</template>

<script>
  import {mapGetters, mapState, mapActions} from 'vuex'
  import {timeDesc} from '../../assets/js/tool'
  import SearchBar from '../searchBar/SearchBar'

  export default {
    name: 'Message',
    data() {
      return {
        removeId: null
      }
    },
    computed: {
      ...mapState({
        ajax: 'isAjax'
      }),
      ...mapGetters({friends: 'msgViewList'})
    },
    methods: {
      ...mapActions(['deleteMsg', 'showChat']),
      onSwipeLeft(id) {
        this.removeId = id
      },
      cancelSwipe() {
        this.removeId = null
      },
      itemClick(user) {
        // 还原左滑
        this.cancelSwipe()
        // 跳转下一个页面
        this.showChat(user)
      }
    },
    components: {
      SearchBar
    },
    filters: {
      getTime(val) {
        return timeDesc(val)
      }
    }
  }
</script>

<style scoped>

  .list {
    position: relative;
  }

  .list .item {
    position: relative;
    transition: all 0.3s linear;
    background: #fff;
    z-index: 10;
  }

  .item.remove {
    transform: translateX(-50px);
  }

  .item .desc {
    text-align: right;
  }

  .item .desc .time {
    display: inline-block;
    width: 100%;
    text-align: right;
  }

  .list .delete-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    line-height: 72px;
    background: red;
    text-align: center;
    color: #fff;
  }
</style>
