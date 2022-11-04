<template>
  <div class="service-pros-shower">
    <IconComponent
      :name="serviceProsElement.icon"
      :color="serviceProsElement.iconColor"
      class="service-pros-shower__icon"
    />
    <div class="content">
      <h4 class="category-title">
        {{ serviceProsElement.title }}
      </h4>
      <p class="description">
        {{ serviceProsElement.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { ServiceProsClass } from "src/js/ServiceProsClass";
import IconComponent from "components/Core/Icon/IconComponent";

export default {
  name: "ServiceProsElement",
  components: {
    IconComponent
  },
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

  .service-pros-shower__icon {
    margin-right: 30px;
  }

  .content {
    color: $dark !important;

    .category-title {
      margin-bottom: 10px;
      line-height: 22px;
    }

    .description {
      font-size: 15px;
      font-weight: 400;
      opacity: .7;
    }
  }

}
</style>
