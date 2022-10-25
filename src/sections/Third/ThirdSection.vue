<template>
  <section class="section third-section">
    <div class="limiter">
      <h2>
        {{ $t("thirdSection.title") }}
      </h2>
      <h4>
        {{ $t("thirdSection.description") }}
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThirdSection"
};
</script>

<style lang="scss" scoped>
.third-section {
  height: 100vh;
}
</style>
