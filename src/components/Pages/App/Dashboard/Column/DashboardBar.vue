<template>
  <DashboardElementWrapper
    :title="title"
    :description="description"
    :ratio="1"
    icon-name="more_vert"
  >
    <div class="dashboard-bar-chart">
      <BarChart
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
import DashboardElementWrapper from "components/Pages/App/Dashboard/DashboardElementWrapper";
import BarChart from "components/Core/Charts/Bar/BarChart";

export default {
  name: "DashboardBar",
  components: {
    BarChart,
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

<style lang="scss" scoped>
.dashboard-bar-chart{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
