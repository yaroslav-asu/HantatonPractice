<template>
  <AppPagesWrapper>
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
      <div class="blocks-wrapper">
        <div class="blocks-col blocks-col--first">
          <DashboardPie
            :title="$t('dashboard.pie.title')"
            :data-set="pieDataSet"
            :colors="colors"
            class="pie"
          />
          <DashboardProgress
            :title="$t('dashboard.progress.additional.title')"
            :description="$t('dashboard.progress.additional.description')"
            :color="colors[0]"
            class="additional-progress"
            icon-name="select_all"
            :value="Math.random()"
          />
        </div>
        <div class="blocks-col blocks-col--second">
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
        "data_usage",
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
$gap: 20px;


.content {
  padding: 20px;
  overflow: auto;
}

.col-wrapper {
  margin-bottom: 20px;
  display: grid;
  grid-gap: $gap;
  grid-template-columns: get-column(4, $gap);
}

.blocks-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: $gap;

  .blocks-col {
    display: flex;
    flex-direction: column;
    gap: $gap;

    &--first {
      width: 60%;

      .additional-progress {
        flex: 1;
      }
    }

    &--second {
      width: 40%;
    }
  }
}

@media (max-width: 1050px) {
  .col-wrapper {
    grid-template-columns: get-column(2, $gap);
  }
}

@media (max-width: 767px) {
  .blocks-col {
    &--first {
      width: 100% !important;
    }

    &--second {
      width: 100% !important;
    }
  }
  .blocks-wrapper {
    flex-direction: column-reverse;
  }
}

@media (max-width: 650px) {
  .col-wrapper {
    grid-template-columns: get-column(1, $gap);
  }
}
</style>
