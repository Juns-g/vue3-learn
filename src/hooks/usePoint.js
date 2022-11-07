import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function () {
  let p = reactive({
    x: 0,
    y: 0,
  });

  function savePoint(e) {
    console.log(e.pageX, e.pageY);
    p.x = e.pageX;
    p.y = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });
  return p;
}
