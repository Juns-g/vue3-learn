<template>
  <br /><br />
  <input type="text" v-model="keyword" />
  <h1>{{ keyword }}</h1>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { customRef } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Demo",
  setup() {
    // 自定义的myRef，里面的配置需要自己完善
    function myRef(value, delay) {
      let timer;
      // 通过customRef来自定义
      return customRef((track, trigger) => {
        return {
          get() {
            track(); // 告诉Vue这个value值需要追踪
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); //告诉Vue去更新界面
            }, delay);
          },
        };
      });
    }
    // 使用自定义的ref
    let keyword = myRef("hello", 200);
    return { keyword };
  },
};
</script>
