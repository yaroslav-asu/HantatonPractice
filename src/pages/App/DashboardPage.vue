<template>
  <q-page>
    <AppPagesWrapper
      class="wrapper"
      :wrapperStyle="{
        padding: '25px'
      }"
    >
      <div class="col-wrapper four-cols">
        <DashboardProgress
          v-for="(progress,index) in progressList"
          :key="progress"
          :title="progress.title"
          :description="progress.description"
          :iconName="progress.iconName"
          :color="colors[index]"
        />
      </div>
      <div class="col-wrapper three-cols">
        <DashboardPie
          title="title"
          description="description"
          :data-set="pieDataSet"
          :colors="colors"
        />
      </div>
    </AppPagesWrapper>
  </q-page>
</template>

<script>
import AppPagesWrapper from "components/Pages/App/AppPagesWrapper";
import DashboardProgress from "components/Pages/App/Dashboard/Progress/DashboardProgress";
import DashboardPie from "components/Pages/App/Dashboard/Pie/DashboardPie";
import { colors } from "src/js/Dashboard/Dashboard";

export default {
  name: "DashboardPage",
  components: {
    DashboardPie,
    AppPagesWrapper,
    DashboardProgress
  },
  computed: {
    colors() {
      return colors(Math.max(this.progressList.length, this.pieDataSet.length));
    },
    progressList() {
      return [
        {
          title: "Progress",
          description: "This is a progress bar",
          iconName: "payments"
        },
        {
          title: "Progress",
          description: "This is a progress bar",
          iconName: "maps_home_work"
        },
        {
          title: "Progress",
          description: "This is a progress bar",
          iconName: "data_thresholding"
        },
        {
          title: "Progress",
          description: "This is a progress bar",
          iconName: "data_thresholding"
        }
      ];
    }
  },
  data() {
    return {
      pieDataSet: [
        {
          label: "Green",
          value: 50
        },
        {
          label: "Yellow",
          value: 40
        }, {
          label: "Yellow",
          value: 40
        },
        {
          label: "Yellow",
          value: 40
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@function get-column($columns) {
  @return repeat($columns, calc(100% / #{$columns} - 15px * calc((#{$columns} - 1) / #{$columns})));
}

.col-wrapper {
  margin: 7.5px 0 7.5px 0;
  display: grid;
  grid-gap: 15px;
}

.two-cols {
  grid-template-columns: get-column(2);
}

.three-cols {
  grid-template-columns: get-column(3);
}

.four-cols {
  grid-template-columns: get-column(4);
}

</style>
