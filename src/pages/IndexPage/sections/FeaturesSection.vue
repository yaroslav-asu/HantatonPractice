<template>
  <section class="section about-section">
    <div class="limiter">
      <h2 class="section-title">
        {{ $t("thirdSection.title") }}
      </h2>
      <h5 class="section-description">
        {{ $t("thirdSection.description") }}
      </h5>
      <div class="features-wrapper">
        <ServiceFeatures :itemsInLine="itemsInLine" class="service-feature"/>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceFeatures from "components/Core/ServiceFeatures/ServiceFeatures.vue";

export default {
  name: "ThirdSection",
  components: {ServiceFeatures},
  data() {
    return {};
  },
  computed: {
    itemsInLine() {
      if (this.$q.screen.width > 1000) return 3
      if (this.$q.screen.width > 600) return 2
      return 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.about-section {
  .limiter {
    height: 100%;
    display: flex;
    flex-direction: column;

    .section-description {
      margin-bottom: 30px;
    }

    .features-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;

      .service-feature {
        max-width: 1000px;
        width: 100%;
      }
    }
  }
}
@media (max-width: 600px) {
  .about-section {
    .limiter{
      text-align: center;
    }
  }
}
</style>
