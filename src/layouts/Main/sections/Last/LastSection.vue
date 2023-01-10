<template>
  <section class="section last-section">
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
.last-section {
  padding-top: $header-height;
  height: 100vh;

  .start-part {
    height: 100%;
    background-image: url("assets/images/laptop.jpg");
    background-repeat: no-repeat;

    .limiter {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .content {
        max-width: 650px;
        text-align: right;
        .content__button{
          width: 140px;
        }
        .category-title{
          margin-bottom: 40px;
          opacity: 0.9;
        }
        .description{
          margin-bottom: 80px;
          font-size: 45px;
        }

      }
    }
  }
}
</style>
