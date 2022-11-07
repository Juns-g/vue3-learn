<template>
  <div class="son">
    <h1>我是Son组件（孙）</h1>
    <Dialog />
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Son",
  components: { Dialog },
};
</script>

<style scoped>
.son {
  background-color: pink;
  padding: 10px;
}
</style>
