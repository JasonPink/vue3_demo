<template>
  <div class="carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  toRefs,
  reactive,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from "vue";

export default {
  name: "Carousel",
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const instance = getCurrentInstance();
    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0,
    });

    let t = null;

    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('next')
        }, props.duration);
      }
    };

    const setIndex = (dir) => {
      switch (dir) {
        case "next":
          state.currentIndex++;
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0;
          }
          break;
        case "prev":
          state.currentIndex--;
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1;
          }
          break;
        default:
          break;
      }
    };

    onMounted(() => {
      state.itemLen = instance.slots.default()[0].children.length;
      autoPlay();
    });

    onBeforeUnmount(() => {
      clearInterval(t);
      t = null;
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;
  .inner {
    position: relative;
    overflow: hidden;
    height: 100%;
  }
}
</style>