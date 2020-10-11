<template>
  <div class="container">
    Day page
  </div>
</template>

<script>
import api from "@/api";
import { onMounted } from "vue";
export default {
  name: "DayPage",
  setup() {
    onMounted(() => {
      console.log(222);
      api.calendar.getDayData("2020-10-2");
      api.calendar.getMonthData("2020-10");
      api.calendar.getYearData("2020");
    });
  },
};
</script>

<style lang="scss" scoped>
</style>