<template>
  <section class="section greeting-section">
    <div class="limiter flex items-center">
      <div class="content_wrapper">
        <h1 class="site-thematic animate__backInLeft">
          {{ $t("greetingSection.thematic") }}
        </h1>
        <h3 class="site-description q-mb-xl">
          {{ $t("greetingSection.description") }}
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
    </div>
  </section>
</template>

<script>

export default {
  name: "FirstSection"
};
</script>

<style lang="scss" scoped>
.greeting-section {
  position: relative;
  background-image: url("src/assets/images/sittingMan.png");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: min(65%, 1000px);
  display: flex;
  flex-direction: column;

  .limiter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 1;

    .content_wrapper {
      width: 60%;

      .site-thematic {
        margin-bottom: 20px;
      }

      .button {
        border-radius: 5px;
        width: 30%;
      }
    }
  }
}

@media (max-width: 1000px) {
  .greeting-section {
    background-size: 80%;
  }
  .limiter {
    display: flex;
    flex-direction: column;
  }

  .content_wrapper {
    width: 100% !important;

    .site-description {
      width: 50%;
    }
  }
}

@media (max-width: 750px) {
  .greeting-section {
    background: none !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;

    .content_wrapper {
      text-align: center;
    }

    .site-description {
      width: 100%;
    }
  }
}

@media (max-width: 600px) {

  .site-thematic {
    font-size: 60px;
    line-height: 75px;
  }
  .button {
    width: 100% !important;
  }
}
</style>
