<template>
  <div
    class="dashboard-element_wrapper"
    :style="{
      aspectRatio: ratio ? ratio : 'unset',
    }"
  >
    <div class="text-wrapper">
      <p class="title">
        {{ title }}
      </p>
      <q-icon
        class="icon"
        :name="iconName"
        :color="iconColor"
        :style="{
            color: iconColor
          }"
      />
    </div>
    <p class="description">
      {{ description }}
    </p>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardElementWrapper",
  props: {
    ratio: {
      type: Number,
      default: null
    },
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

  }
};
</script>

<style lang="scss" scoped>
.dashboard-element_wrapper {
  padding: 20px;
  border-radius: 10px;
  border: 2px solid $grey;
  display: flex;
  flex-direction: column;
  background: white;


  .text-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;


    .title {
      font-size: 22px;
      font-weight: 600;
    }

    .icon {
      font-size: 20px;
    }
  }

  .description {
    margin-bottom: 10px;
    opacity: 0.7;
  }
  .content{
    flex-grow: 1;
  }
}
</style>
