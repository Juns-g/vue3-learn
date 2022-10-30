<template>
  <div class="outer">
    <div class="text">
      <p>开始学习</p>
    </div>
    <div class="button">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { reactive, computed } from "vue";
export default {
  name: "LearnTest",
  setup() {
    let person = reactive({
      name1: "张",
      name2: "三",
    });
    return {
      person,
    };
  },
};

</script>

<style scoped>
.outer {
  height: 200px;
  width: 200px;
  position: absolute;
  /* border: 1px solid gray; */
  border-radius: 10px;
  left: 30%;

  top: 30%;
  border-radius: 20px;
  /* background: #edebeb; */
  box-shadow: 10px 10px 60px #cecccc, -10px -10px 60px #ffffff;
}

.text {
  height: 90px;
  width: 200px;
}
p {
  color: #464646;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  line-height: 60px;
  /* margin-top: 50px; */
  /* border: 1px solid yellowgreen; */
}
.button {
  height: 100px;
  text-align: center;
}
/* From www.lingdaima.com */
/* The switch - the box around the slider */
.switch {
  text-align: center;
  font-size: 20px;
  position: relative;
  display: inline-block;
  /* width: 3.5em;
  height: 2em; */
  height: 2.1em;
  width: 3.675em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.7em;
  width: 1.7em;
  border-radius: 20px;
  left: 0.25em;
  bottom: 0.2em;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: rgb(0, 221, 80);
}

input:focus + .slider {
  box-shadow: 0 0 0 rgb(0, 221, 80);
}

input:checked + .slider:before {
  transform: translateX(1.5em);
}
</style>
<!-- var ip = document.querySelector("input");
function f(time) {
  setTimeout(() => {
    time += 1000;
    if (time == 2000) ip.click();
    f(time);
  }, time);
}
f(0); -->
