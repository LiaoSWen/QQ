<template>
  <div class="detail-view">
    <mu-appbar style="width: 100%;" textColor="#6b6b6b" :z-depth="0" color="transparent">
      <mu-button icon slot="left">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <div class="nav-right" slot="right">
        <mu-icon value="call"></mu-icon>
        <mu-icon value="person"></mu-icon>
      </div>
    </mu-appbar>
    <div class="content">
      <div>
        <mu-avatar :size="size">
          <img :src="userData.avatar">
        </mu-avatar>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'DetailView',
    computed: mapGetters({userData: 'detailUserData'})
  }
</script>

<style scoped>
  .detail-view {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: url("../../assets/img/bg.jpg") no-repeat top left;
    background-color: #fff;
    background-size: 100%;
  }
</style>
