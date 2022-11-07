<template>
  <div class="child">
    <h1>我是Child组件（子）</h1>
    <Son></Son>
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Child",
  components: {
    Son,
  },
};
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
