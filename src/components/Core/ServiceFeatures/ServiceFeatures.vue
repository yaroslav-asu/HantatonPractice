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
      v-for="el in serviceFeatures.currentPage"
      :service-feature="el"
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
          title: "Fast",
          description: "Very fast",
          link: "/a"
        },
        {
          icon: "search",
          iconColor: "purple",
          title: "User friendly",
          description: "Very user friendly",
          link: "/a"
        },
        {
          icon: "home",
          iconColor: "red",
          title: "title",
          description: "description",
          link: "/a"
        },
        {
          icon: "assignment_ind",
          iconColor: "orange",
          title: "Fast",
          description: "Very fast",
          link: "/a"
        },
        {
          icon: "search",
          iconColor: "purple",
          title: "User friendly",
          description: "Very user friendly",
          link: "/a"
        },
        {
          icon: "home",
          iconColor: "red",
          title: "title",
          description: "description",
          link: "/a"
        },
        {
          icon: "home",
          iconColor: "red",
          title: "title",
          description: "description",
          link: "/a"
        }, {
          icon: "home",
          iconColor: "red",
          title: "title",
          description: "description",
          link: "/a"
        },
        {
          icon: "home",
          iconColor: "red",
          title: "title",
          description: "description",
          link: "/a"
        }, {
          icon: "home",
          iconColor: "red",
          title: "title",
          description: "description",
          link: "/a"
        },
        {
          icon: "home",
          iconColor: "red",
          title: "title",
          description: "description",
          link: "/a"
        }
      ])
    };
  }
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
