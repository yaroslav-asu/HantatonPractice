<template>
  <div class="service-feature">
    <IconComponent
      :name="serviceFeature.icon"
      :color="serviceFeature.iconColor"
    />
    <div class="text">
      <h4 class="title">
        {{ serviceFeature.title }}
      </h4>
      <p>
        {{ serviceFeature.description }}
      </p>
    </div>

    <router-link to="/" class="learn-more">
      {{ $t("learnMore") }}
      <q-icon name="east"></q-icon>
    </router-link>
  </div>
</template>

<script>
import ServiceFeatureClass from "src/js/ServiceFeatures/ServiceFeature/ServiceFeatureClass";
import IconComponent from "components/Core/Icon/IconComponent";

export default {
  name: "ServiceFeature",
  components: {
    IconComponent
  },
  props: {
    serviceFeature: {
      type: ServiceFeatureClass,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.service-feature{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  box-shadow: $lite-shadow;
  border-radius: 20px;
  padding: 40px;
  aspect-ratio: 1;
}
.title{
  margin-bottom: 8px;
}
</style>
