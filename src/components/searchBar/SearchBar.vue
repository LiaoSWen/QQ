<template>
  <mu-sub-header class="searchWapper">
    <div class="searchBar">
      <mu-icon value="search" size="20" class="icon"></mu-icon>
      <span class="text">搜索</span>
    </div>
  </mu-sub-header>
</template>

<script>
  export default {
    name: 'SearchBar'
  }
</script>

<style scoped>
  .searchWapper {
    box-sizing: border-box;
    height: 45px;
    padding: 10px;
  }

  .searchBar {
    background: rgba(7, 17, 27, 0.1);
    height: 100%;
    border-radius: 4px;
  }

  .searchBar .icon {
    display: inline-block;
    vertical-align: top;
    line-height: 25px;
    margin-left: 5px;
  }

  .searchBar .text {
    display: inline-block;
    line-height: 25px;
    font-size: 12px;
    vertical-align: top;
  }
</style>
