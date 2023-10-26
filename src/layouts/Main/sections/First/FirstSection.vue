<template>
  <section class="section first-section">
    <div class="limiter flex items-center">
      <div class="text-part">
        <h1 class="site-thematic animate__backInLeft">
          {{ $t("firstSection.thematic") }}
        </h1>
        <h3 class="site-description q-mb-xl">
          {{ $t("firstSection.description") }}
        </h3>
        <q-btn
          :label="$t('signUp')"
          color="primary"
          class="button big-button"
          :ripple="false"
          no-caps
          to="/register"
        />
      </div>
      <div class="images-part">

        <q-img
          class="man-image"
          src="~assets/images/sittingMan.png"
        />
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "FirstSection"
};
</script>

<style lang="scss" scoped>
.button {
  border-radius: 5px;
  width: 30%;
}

.first-section {
  position: relative;

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
        bottom: 10px + $header-height;
        right: 0;
        width: 58%;
        z-index: 0;
      }
    }
  }
}
</style>
