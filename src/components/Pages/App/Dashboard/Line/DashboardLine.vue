<template>
  <DashboardElementWrapper
    :title="title"
    :description="description"
    :ratio="1"
    icon-name="more_vert"
  >
    <div class="dashboard-bar-chart">
      <LineChart
        :data-set="[]"
        :chart-style="{
          width: '70%'
        }"
        :color="color"
      />
    </div>
  </DashboardElementWrapper>
</template>

<script>
import DashboardElementWrapper from "components/Pages/App/Dashboard/DashboardElementWrapper.vue";
import LineChart from "components/Core/Charts/Line/LineChart.vue";
export default {
  name: "DashboardBar",
  components: {
    LineChart,
    DashboardElementWrapper
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    dataSet: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">

</style>
