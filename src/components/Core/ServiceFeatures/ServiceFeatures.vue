<template>
  <div
    class="service-features"
    :style="{
      'grid-template-columns': gridTemplate,
      'grid-gap': `${gap}px`,
    }"
  >
    <FeaturesButton
      class="border"
      v-if="!serviceFeatures.isFirstPage"
      :features-count="serviceFeatures.featuresWas"
      iconName="west"
      :action="serviceFeatures.prev.bind(serviceFeatures)"
    />
    <ServiceFeature
      class="border"
      v-for="(el, id) in serviceFeatures.currentPage"
      :service-feature="{
        ...el,
      title: $t(`serviceFeatures.${id + 1}.title`),
      description: $t(`serviceFeatures.${id + 1}.description`),
      }"
      :key="el"
    />
    <FeaturesButton
      class="border"
      v-if="!serviceFeatures.isLastPage"
      :features-count="serviceFeatures.featuresLeft"
      iconName="east"
      :action="serviceFeatures.next.bind(serviceFeatures)"
    />
  </div>
</template>

<script>
import ServiceFeatures from "src/js/ServiceFeatures/ServiceFeatures";
import ServiceFeature from "src/components/Core/ServiceFeatures/ServiceFeature/ServiceFeature";
import FeaturesButton from "src/components/Core/ServiceFeatures/Button/FeaturesButton";

export default {
  name: "ServiceFeatures",
  components: {
    ServiceFeature,
    FeaturesButton
  },
  props: {
    itemsInLine: {
      type: Number,
    }
  },
  data() {
    return {
      serviceFeatures: new ServiceFeatures([
        {
          icon: "assignment_ind",
          iconColor: "#f5b345",
          link: "/"
        },
        {
          icon: "search",
          iconColor: "#5149bf",
          link: "/"
        },
        {
          icon: "favorite_border",
          iconColor: "#EB5160",
          link: "/"
        },
        {
          icon: "insert_chart",
          iconColor: "#69A197",
          link: "/"
        },
        {
          icon: "settings",
          iconColor: "#DFE0E2",
          link: "/"
        },
        {
          icon: "language",
          iconColor: "#FFC15E",
          link: "/"
        },
        {
          icon: "devices",
          iconColor: "#7C9EB2",
          link: "/"
        },
        {
          icon: "attach_money",
          iconColor: "#06D6A0",
          link: "/"
        },
        {
          icon: "access_time",
          iconColor: "#AFD0D6",
          link: "/"
        }
      ]),
      gap: 40
    };
  },
  computed: {
    gridTemplate() {
      return `repeat(${this.itemsInLine}, calc(${100 / this.itemsInLine}% - ${this.gap * (this.itemsInLine - 1) / this.itemsInLine}px))`
    },
  }
};
</script>

<style lang="scss" scoped>
.service-features {
  display: grid;
}

.border {
  border-radius: 20px;
}
</style>
