<template>
  <section class="section start-section">
    <div class="start-part">
      <div class="limiter">
        <div class="content">
          <h2 class="category-title"> {{ $t("lastSection.title") }}</h2>
          <h3 class="description"> {{ $t("lastSection.description") }}</h3>
          <q-btn
            class="button big-button content__button"
            color="primary"
            :label="$t('letsStart')"
            no-caps
            :ripple="false"
            @click="$router.push('/register')"
          />
        </div>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "LastSection"
};
</script>

<style lang="scss" scoped>
.start-section {
  padding-top: $header-height;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .start-part {
    height: 100%;
    background-image: url("assets/images/laptop.jpg");
    background-repeat: no-repeat;
    min-height: 885px;
    background-color: #ebebeb;

    .limiter {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .content {
        max-width: 650px;
        text-align: right;

        .content__button {
          width: 140px;
        }

        .category-title {
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .description {
          margin-bottom: 80px;
          font-size: 45px;
        }
      }
    }
  }
}

@media (max-width: 1360px) {
  .start-part {
    background-image: none !important;
    align-items: center !important;
    display: flex;

    .limiter {
      justify-content: center !important;

      .content {
        text-align: center !important;
        max-width: none !important;
      }
    }
  }
}
@media (max-width: 600px) {
  .button{
    width: 100% !important;
  }
}
</style>
