<template>
  <div class="container">
    <Child :text="obj.foo"/>
    month
    <div>
      <p>{{count}}</p>
      <p>{{obj.foo}}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive,h } from "vue";
import Child from '@/components/child'
export default {
  name: "MonthPage",
  components: {
    Child
  },
  setup() {
    const count = ref(0);
    const obj = reactive({ foo: "bar" });

    setTimeout(() => {
      count.value = 20;
      obj.foo = 'yemeng'
    }, 1000);
    return {
      count,
      obj
    }
    //可以返回函数
    //return () => h('h1', [count.value, obj.foo])
  },
};
</script>

<style lang="scss" scoped>
.container{
  padding: 25px;
  font-size: 26px;
}
</style>