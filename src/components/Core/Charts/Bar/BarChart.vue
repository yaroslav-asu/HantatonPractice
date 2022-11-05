<template>
  <div class="bar-chart">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :style="chartStyle"
    />

  </div>
</template>

<script>
import "chart.js/auto";
import { Bar } from "vue-chartjs";

export default {
  name: "BarChart",
  components: {
    Bar
  },
  props: {
    dataSet: {
      type: Object,
      required: true
    },
    chartStyle: {
      type: Object,
      default: () => ({})
    },
    color: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      chartData: {
        labels: [10, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
          {
            label: "Fully Rounded",
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: this.color,
            borderSkipped: false,
            borderRadius: 10,
            barPercentage: 0.4,
            categoryPercentage: 1.0
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            display: false
          }
        },
        scales: {
          xAxis: {
            offset: true,
            ticks: {
              display: false
            },
            grid: {
              display: false,
              drawBorder: false
            }
          },
          yAxis: {
            ticks: {
              display: false
            },
            grid: {
              display: false,
              drawBorder: false
            }
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.bar-chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
