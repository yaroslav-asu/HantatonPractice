<template>
  <section class="section third-section">
    <div class="limiter">
      <h2>
        {{ $t("thirdSection.title") }}
      </h2>
      <h5>
        {{ $t("thirdSection.description") }}
      </h5>
      <div class="features-wrapper">
        <ServiceFeatures class="service-feature"/>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceFeatures from "components/Core/ServiceFeatures/ServiceFeatures";

export default {
  name: "ThirdSection",
  components: { ServiceFeatures },
  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
.third-section {
  height: 100vh;
  .limiter{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
.features-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  .service-feature{
    max-width: 1000px;
    width: 100%;
  }
}

</style>
