<template>
  <DashboardElementWrapper
    :title="title"
    :description="description"
    :icon-name="iconName"
    :icon-color="color"
  >
    <div class="progress-wrapper">
      <q-linear-progress
        class="progress"
        :value="progress"
        :color="color"
        :style="{
          color: color
        }"
        :animation-speed="700"
      />
      <p class="percentage">
        {{ Math.floor(progress * 100) + "%" }}
      </p>
    </div>
  </DashboardElementWrapper>
</template>

<script>
import DashboardElementWrapper from "components/Pages/App/Dashboard/DashboardElementWrapper";

export default {
  name: "DashboardProgress",
  components: {DashboardElementWrapper},

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    iconName: {
      type: String
    },
    color: {
      type: String,
      default: "primary"
    },
    value: {
      type: Number,
      default: 0.5,
    },
  },
  data() {
    setTimeout(() => {
      this.progress = this.value;
    }, 0);
    return {
      progress: 0
    };
  },
};
</script>

<style lang="scss" scoped>
.progress-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .progress {
    margin-right: 10px;
  }

  .percentage {

  }
}
</style>
