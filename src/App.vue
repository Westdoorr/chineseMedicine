<template>
<div class="container">
  <router-view></router-view>
</div>
</template>

<style lang="scss">
.container{
  width: 100%;
  height: 100%;
}
</style>


<script>
export default {
  name: 'App',
  data: function () {
  return {
    count: 0
  }
}
}
</script>
