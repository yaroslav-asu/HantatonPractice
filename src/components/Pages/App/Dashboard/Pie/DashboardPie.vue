<template>
  <DashboardElementWrapper
    class="dashboard-pie"
    :title="title"
    :description="description"
    iconName="more_vert"
    color="grey"
    :ratio="1"
  >
    <div class="pie-chart_wrapper">
      <PieChart
        :data-set="dataSet"
        :colors="colors"
        :chart-style="{
          width: '65%',
        }"
      />
    </div>
  </DashboardElementWrapper>
</template>

<script>
import DashboardElementWrapper from "components/Pages/App/Dashboard/DashboardElementWrapper";
import PieChart from "components/Core/Charts/Pie/PieChart";

export default {
  name: "DashboardPie",
  components: {
    PieChart,
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
    iconName: {
      type: String
    },
    iconColor: {
      type: String
    },
    dataSet: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.pie-chart_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
