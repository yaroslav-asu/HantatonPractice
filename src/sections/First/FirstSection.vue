<template>
  <section class="section first-section">
    <div class="limiter flex items-center">
      <div class="text-part">
        <h1 class="site-thematic">
          {{ $t("firstSection.thematic") }}
        </h1>
        <h3 class="site-description q-mb-xl">
          {{ $t("firstSection.description") }}
        </h3>
        <EmailInput></EmailInput>
      </div>
      <div class="images-part">

        <q-img
          class="man-image"
          src="../../assets/images/sittingMan.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import EmailInput from "components/Core/EmailInput/EmailInput";

export default {
  name: "FirstSection",
  components: {
    EmailInput
  }
};
</script>

<style lang="scss" scoped>
.first-section {
  position: relative;
}

.limiter {
  height: 100%;

  .text-part {
    width: 50%;

    .site-thematic {
      white-space: pre;
      margin-bottom: 20px;
    }
  }

  .images-part {
    width: 50%;

    .man-image {
      position: absolute;
      bottom: 10px;
      right: 0;
      width: 58%;
      z-index: 0;
    }
  }
}


</style>
