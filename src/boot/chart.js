import { boot } from "quasar/wrappers";
import { Chart } from "chart.js";
import ChartJSPluginDatalabels from "chartjs-plugin-datalabels";

export default boot(() => {
  Chart.register(ChartJSPluginDatalabels);
});
