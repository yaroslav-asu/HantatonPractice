<template>
  <div class="service-feature">
    <IconComponent
      class="icon-component"
      :name="serviceFeature.icon"
      :color="serviceFeature.iconColor"
    />
    <div class="content">
      <h4 class="category-title">
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
.service-feature {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: $lite-shadow;
  padding: 40px;
  aspect-ratio: 1;
}

.category-title {
  margin-bottom: 8px;
  line-height: normal;
}

@media (max-width: 600px) {
  .service-feature {
    align-items: center !important;
  }
}
</style>
<style lang="scss">
@media (max-width: 1000px) {
  .service-feature {
    .icon-component {
      background: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      padding-bottom: 20px !important;

      .icon {
        font-size: 140px !important;
      }
    }
  }
}
</style>
