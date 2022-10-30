<template>
  <h1>{{ sum }}</h1>
  <button @click="sum++">点我喜加一</button>
  <br /><br />
  <h1>{{ msg }}</h1>
  <button @click="msg += '!'">点我加！</button>
  <br /><br />
  <h1>姓名：{{ person.name }}</h1>
  <h1>年龄：{{ person.age }}</h1>
  <h1>薪水：{{ person.job.j1.salary }}K</h1>
  <br /><br />
  <button @click="person.name += '~'">姓名+</button>
  <button @click="person.age++">年龄+</button>
  <button @click="person.job.j1.salary++">加薪</button>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Demo",
  setup() {
    let sum = ref(0);
    let msg = ref("Hi");
    let person = reactive({
      name: "John",
      age: 18,
      job: { j1: { salary: 20 } },
    });
    // 1. 监视ref定义的一个响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    },{immediate:true}); */

    // 2. 监视ref定义的多个响应式数据
    /* watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { immediate: true } // 刚出现也执行watch
    ); */

    // 3. 监视reactive定义的一个响应式数据的全部属性
    // ! 此处无法获取正确的oldValue，新旧一样的
    // ! 强制开启了深度监视（deep配置无效）
    /* watch(
      person,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { deep: false } // 此处deep配置无效
    ); */

    // 4. 监视reacive定义的一个响应式数据中的一个属性
    /* watch(
      () => person.age,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    ); */

    // 5. 监视reacivee定义的一个响应式数据中的某些属性
    // ! 能监听到旧数据了
    /* watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }); */

    // 特殊情况
    /* watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { deep: true } // 监听深层属性，需要开启deep
    ); */

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
