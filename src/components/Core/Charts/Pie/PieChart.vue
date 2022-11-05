<template>
  <div class="pie-chart">
    <Pie
      :chart-options="chartOptions"
      :chart-data="chartData"
      :style="chartStyle"

    />
    <div class="pie-legend">
      <div
        v-for="(item, index) in dataSet"
        :key="item"
        class="item"
        :style="{'--color': colors[index]}"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import "chart.js/auto";
import { Pie } from "vue-chartjs";

export default {
  name: "PieChart",
  components: {
    Pie
  },
  props: {
    chartStyle: {
      type: Object,
      default: () => ({})
    },
    dataSet: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: false
          },
          legend: {
            display: false
          },
          datalabels: {
            formatter: (value, context) => {
              return Math.round(this.values[context.dataIndex] / this.values.reduce((a, b) => a + b, 0) * 100 * 10) / 10 + "%";
            },
            color: "white",
            font: {
              weight: "bold",
              size: 16
            }
          }
        }
      }
    };
  },
  computed: {
    labels() {
      return this.dataSet.map(item => item.label);
    },
    values() {
      return this.dataSet.map(item => item.value);
    },
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            data: this.values,
            backgroundColor: this.colors
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.pie-chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pie-legend {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    .item {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      color: $text-color;

      &::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 6px;
        margin-right: 5px;
        border-radius: 5px;
        background-color: var(--color);
      }
    }
  }
}
</style>
