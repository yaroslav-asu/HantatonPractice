<template>
  <section class="section companies-section">
    <div class="limiter">
      <p class="company">
        Zoncord
      </p>
      <p class="company">
        Zoncord
      </p>
      <p class="company">
        Zoncord
      </p>
      <p class="company">
        Zoncord
      </p>
      <p class="company">
        Zoncord
      </p>
    </div>

  </section>
</template>

<script>
export default {
  name: "CompaniesSection"
};
</script>

<style lang="scss" scoped>
.companies-section {
  height: 100px;
  display: flex;
  align-items: center;

  .limiter {
    display: flex;
    justify-content: space-between;
    padding: 0 100px;

    .company {
      font-size: 30px;
      font-weight: 400;
    }
  }
}
</style>
