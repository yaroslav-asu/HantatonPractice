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
    </div>
  </section>
</template>

<script>
import EmailInput from "components/Core/EmailInput/EmailInput";
export default {
  name: "FirstSection",
  components: {
    EmailInput,
  }

};
</script>

<style lang="scss" scoped>
.limiter{
  height: 100%;
}
.text-part{
  width: 70%;
  .site-thematic {
    font-size: 100px;
    font-weight: 400;
    white-space: pre;
  }

  .site-description {
    font-size: 40px;
    font-weight: 400;
    margin-top: 20px;
    //white-space: pre;
  }
}

</style>
