<template>
  <div class="line-chart">
    <Line
      :chart-options="chartOptions"
      :chart-data="chartData"
      :style="chartStyle"
    />
  </div>
</template>

<script>
import {Line} from "vue-chartjs";

export default {
  name: "PieChart",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Line,
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
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
          {
            label: "Fully Rounded",
            data: [1, 10, 101, 21, 17, 18, 11, 51, 11, 31],
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
              display: true
            },
            grid: {
              display: true,
              drawBorder: true
            }
          },
          yAxis: {
            ticks: {
              display: true
            },
            grid: {
              display: true,
              drawBorder: true
            }
          }
        }
      }
    };
  },
  computed: {
    styles() {
      return {
        height: '100px',
        position: 'relative',
      }
    }
  }
}
</script>

<style scoped lang="scss">
.line-chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
