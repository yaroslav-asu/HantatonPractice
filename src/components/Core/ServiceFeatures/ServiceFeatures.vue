<template>
  <div class="service-features">
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
  data() {
    return {
      serviceFeatures: new ServiceFeatures([
        {
          icon: "assignment_ind",
          iconColor: "orange",
          link: "/"
        },
        {
          icon: "search",
          iconColor: "purple",
          link: "/"
        },
        {
          icon: "favorite_border",
          iconColor: "red",
          link: "/"
        },
        {
          icon: "insert_chart",
          iconColor: "blue",
          link: "/"
        },
        {
          icon: "settings",
          iconColor: "green",
          link: "/"
        },
        {
          icon: "language",
          iconColor: "orange",
          link: "/"
        },
        {
          icon: "devices",
          iconColor: "teal",
          link: "/"
        },
        {
          icon: "attach_money",
          iconColor: "green",
          link: "/"
        },
        {
          icon: "access_time",
          iconColor: "indigo",
          link: "/"
        }
      ])
    };
  },
  // computed: {
  //   features: () => {
  //     const features =
  //     return features.map((el, index) => {
  //       return {
  //         ...el,
  //         title: this.$t(`features.${index + 1}.title`),
  //       }
  //     })
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.service-features {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 40px;
}

.border {
  border-radius: 20px;
}
</style>
