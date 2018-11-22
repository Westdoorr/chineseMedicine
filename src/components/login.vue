<template>
  <div id="app">
      登录页面
      <h1>{{ gettersMsg }}</h1>
  </div>
</template>
 <script>
  import {mapGetters} from 'vuex';
  export default {
      name: 'hello',
      computed: {...mapGetters(['gettersMsg'])}
      //使用mapGetters 辅助函数
  }
  
  </script>     