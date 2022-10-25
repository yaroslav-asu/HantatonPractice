<template>
  <section class="section first-section">
    <div class="limiter flex items-center">
      <div class="text-part">
        <p class="site-thematic">
          {{ $t("firstSection.thematic") }}
        </p>
        <p class="site-description q-mb-xl">
          {{ $t("firstSection.description") }}
        </p>
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
      font-size: 60px;
      line-height: 80px;
      font-weight: 500;
      white-space: pre;
      margin-bottom: 20px;
    }


    .site-description {
      font-size: 30px;
      font-weight: 400;
      opacity: .7;
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
