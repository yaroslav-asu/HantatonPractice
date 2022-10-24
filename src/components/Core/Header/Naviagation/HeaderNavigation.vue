<template>
  <nav class="header-navigation">
    <router-link class="header-link" to="/">
      {{ $t("header.navigation.home") }}
    </router-link>
    <router-link class="header-link" to="/">
      {{ $t("header.navigation.portfolio") }}
    </router-link>
    <router-link class="header-link" to="/">
      {{ $t("header.navigation.howItWorks") }}
    </router-link>
    <router-link class="header-link" to="/">
      {{ $t("header.navigation.team") }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderNavigation"
};
</script>

<style lang="scss" scoped>
.header-link{
  margin-right: 40px;
}
</style>
