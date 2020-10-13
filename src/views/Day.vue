<template>
  <div class="container">
    <carousel
      :autoplay="true"
      :duration="3000"
      :initial="1"
      :hasDot="true"
      :hasDirector="true"
    >
      <car-item
        v-for="(item, index) of carData"
        :key="index"
      >
        <img
          :src="require(`../assets/img/${item.img_name}`)"
        >
      </car-item>
    </carousel>
  </div>
</template>

<script>
import api from "@/api";
import { onMounted, watch, watchEffect } from "vue";
import carData from "@/data/carousel";
export default {
  name: "DayPage",
  setup() {
    //在beforeCreate之前调用
    onMounted(() => {
      api.calendar.getDayData("2020-10-2");
      api.calendar.getMonthData("2020-10");
      api.calendar.getYearData("2020");
    });
    watchEffect(() => {});
    watch(() => {});

    return {
      carData,
    };
  },
};
</script>

<style lang="scss" scoped>
.container{
  width: 520px;
  height: 280px;

  margin: 150px auto;
}
</style>