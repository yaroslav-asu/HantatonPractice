<template>
  <q-page>
    <AppPagesWrapper
    >
      <header class="dashboard-header">
        <h2>Dashboard</h2>
      </header>
      <div class="content">
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
          <div class="col">
            <DashboardPie
              :title="$t('dashboard.pie.title')"
              :data-set="pieDataSet"
              :colors="colors"
              class="pie"
            />
            <DashboardProgress
              :title="$t('dashboard.progress.additional.title')"
              :description="$t('dashboard.progress.additional.description')"
              color="#59C3C3"
              class="additional-progress"
              icon-name="select_all"
            />
          </div>
          <div class="col-2">
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

.dashboard-header {
  position: relative;
  background-image: url("src/assets/images/accountTemplateGradient.jpeg");
  background-size: cover;
  background-position: center;
  border-radius: 20px 20px 0 0;
  padding: 50px 20px 50px 20px;

  h2 {
    color: white;
  }
}

.content {
  padding: 20px;
  overflow: auto;
}

.col-wrapper {
  margin-bottom: 20px;
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

  .col {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .additional-progress {
      width: 100%;
      flex-grow: 1;
    }
  }


  .col-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
