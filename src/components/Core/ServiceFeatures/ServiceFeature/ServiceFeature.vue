<template>
  <div class="">
    <q-icon />
    <h4>
      {{ title }}
    </h4>
    <p>
      {{ description }}
    </p>
    <router-link to="/" class="learn-more">
      {{ $t("serviceFeatures.learnMore") }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ServiceFeature"
};
</script>

<style lang="scss" scoped>

</style>
