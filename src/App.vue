<template>
  <div class="app">
    <div class="limit">
      <router-link to="/posts">users</router-link>
      <router-link to="/store">users with store</router-link>
      <div style="padding-bottom: 30px;"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {},
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Tahoma", serif;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
}
h3 {
  margin-bottom: 30px;
}

.limit {
  display: flex;
  flex-direction: column;
  width: 1280px;
  max-width: 100%;
  padding: 0 30px;
  margin: 30px auto;
  align-items: center;
}
</style>