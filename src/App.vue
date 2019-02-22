<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import PostList from './components/PostList.vue';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: #e1e1e1;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
ul,li {
  list-style: none;
}
.main {
  width: 80%;
  margin: 0 auto;
}
</style>
