<template>
  <div class="service-pros-shower">
    <div class="wrapper">
      <q-icon
        class="icon"
        :name="serviceProsElement.icon"
        :style="{
          color: serviceProsElement.iconColor
        }"
      />
    </div>
    <div class="text">
      <p class="title">
        {{ serviceProsElement.title }}
      </p>
      <p class="description">
        {{ serviceProsElement.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { ServiceProsClass } from "src/js/ServiceProsClass";

export default {
  name: "ServiceProsElement",
  props: {
    serviceProsElement: {
      type: ServiceProsClass,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.service-pros-shower {
  display: flex;
  align-items: center;
  max-width: 400px;
  width: 100%;

  .wrapper {
    padding: 15px;
    background-color: $light;
    border-radius: 10px;
    box-shadow: $lite-shadow;
    margin-right: 30px;

    .icon {
      font-size: 30px;
    }
  }

  .text {
    color: $dark !important;

    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .description {
      font-size: 15px;
      font-weight: 400;
      opacity: .7;
    }
  }

}
</style>
