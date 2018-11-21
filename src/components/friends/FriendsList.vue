<template>
  <mu-list class="friends-list" :nested-indent="false" toggle-nested>
    <mu-list-item button :ripple="false" nested :open="open === 'send'"
                  @toggle-nested="open = arguments[0] ? 'send' : ''">
      <mu-list-item-action>
        <mu-icon class="toggle-icon" size="24"
                 :value="open === 'send'?'keyboard_arrow_down':'keyboard_arrow_right'"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>特别关心</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button :ripple="false" nested :open="open === 'drafts'"
                  @toggle-nested="open = arguments[0] ? 'drafts' : ''">
      <mu-list-item-action>
        <mu-icon class="toggle-icon" size="24"
                 :value="open === 'drafts'?'keyboard_arrow_down':'keyboard_arrow_right'"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的好友</mu-list-item-title>
      <mu-list-item button v-for="f in friendsList" @click="showChat(f)" class="f-item" :key="f._id" slot="nested">
        <mu-list-item-action>
          <mu-avatar :size="30" slot="left">
            <img :src="f.avatar">
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>{{f.name}}</mu-list-item-title>
          <mu-list-item-sub-title>{{f.explain}}</mu-list-item-sub-title>
        </mu-list-item-content>
      </mu-list-item>

    </mu-list-item>
  </mu-list>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'FriendsList',
    data() {
      return {
        open: ''
      }
    },
    computed: mapGetters(['friendsList']),
    methods: mapActions(['showChat'])
  }
</script>

<style scoped>
  .f-item .mu-item {
    margin-left: 0 !important;
    background: red;
  }
</style>
