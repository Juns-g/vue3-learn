<template>
  <div class="app">
    <h1>我是App组件（祖）</h1>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child";
export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style scoped>
.app {
  background-color: yellowgreen;
  padding: 10px;
}
</style>
