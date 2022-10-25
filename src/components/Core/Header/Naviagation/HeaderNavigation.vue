<template>
  <nav class="header-navigation">
    <router-link
      v-for="page in pages"
      :key="page.title"
      class="header-link"
      :to="page.link"
    >
      {{ $t(`header.navigation.${page.title}`) }}
    </router-link>

  </nav>
</template>

<script>
export default {
  name: "HeaderNavigation",
  props: {
    pages: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.header-link {
  margin-right: 60px;
  transition: color 0.2s ease;

  &:hover {
    color: $primary;
  }
}
</style>
