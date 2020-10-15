<template>
  <div class="child">{{text}}</div>
</template>

<script>
import {watchEffect} from 'vue'
export default {
  name: 'Child',
  props: {
    text: String
  },
  setup(props, ctx) {
    console.log(props.text);
    //解构props对象，会使其失去响应性
    // const { text } = props.text

    const { attrs, slots, emit} = ctx;
    console.log(attrs, slots, emit)
    watchEffect(() => {
      console.log('text:', props.text)
    })
  }
}
</script>

<style>

</style>