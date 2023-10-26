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
          v-for="(image,index) in progressImages"
          :key="image"
          :title="$t(`dashboard.progress.${index + 1}.title`)"
          :description="$t(`dashboard.progress.${index + 1}.description`)"
          :iconName="image"
          :color="colors[index]"
          :value="Math.random()"
        />
      </div>
      <div class="blocks_wrapper">
        <DashboardPie
          :title="$t('dashboard.pie.title')"
          :data-set="pieDataSet"
          :colors="colors"
          class="pie"
        />
        <div class="col">
          <DashboardBar
            :title="$t('dashboard.bar.title')"
            :description="$t('dashboard.bar.description')"
            :data-set="[]"
            :color="colors[0]"
          />
          <DashboardLine
            :title="$t('dashboard.line.title')"
            :description="$t('dashboard.line.description')"
            :data-set="[]"
            :color="colors[0]"
          />
        </div>
      </div>
    </AppPagesWrapper>
  </q-page>
</template>

<script>
import AppPagesWrapper from "components/Pages/App/AppPagesWrapper";
import DashboardProgress from "components/Pages/App/Dashboard/Progress/DashboardProgress";
import DashboardPie from "components/Pages/App/Dashboard/Pie/DashboardPie";
import {colors} from "src/js/Dashboard/Dashboard";
import DashboardBar from "components/Pages/App/Dashboard/Column/DashboardBar";
import DashboardLine from "components/Pages/App/Dashboard/Line/DashboardLine.vue";

export default {
  name: "DashboardPage",
  components: {
    DashboardBar,
    DashboardPie,
    DashboardLine,
    AppPagesWrapper,
    DashboardProgress,
  },
  computed: {
    colors() {
      return colors(Math.max(this.progressImages.length, this.pieDataSet.length));
    },
    progressImages() {
      return [
        "payments",
        "maps_home_work",
        "data_thresholding",
        "data_thresholding",
      ];
    },
    pieDataSet() {
      return [
        {
          label: "1",
          value: 10
        },
        {
          label: "2",
          value: 20
        },
        {
          label: "3",
          value: 30
        },
        {
          label: "4",
          value: 40
        }
      ];
    }
  },
};
</script>

<style lang="scss" scoped>
@function get-column($columns) {
  @return repeat($columns, calc(100% / #{$columns} - 20px * calc((#{$columns} - 1) / #{$columns})));
}

.col-wrapper {
  margin: 20px 0;
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

.blocks_wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;

  .pie {
    width: 60%;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
