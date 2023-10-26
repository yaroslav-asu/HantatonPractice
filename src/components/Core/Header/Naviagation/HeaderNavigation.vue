<template>
  <nav class="header-navigation">
    <router-link
      v-for="page in pages"
      :key="page"
      class="header-link"
      :to="page.link"
      @click="() => scrollToTarget(page.link)"
    >
      {{ $t(`pages.${page.title}`) }}
    </router-link>
  </nav>
</template>

<script>
import {scroll} from 'quasar'

const {setVerticalScrollPosition, getScrollTarget} = scroll
export default {
  name: "HeaderNavigation",
  props: {
    pages: {
      type: Object,
      required: true
    }
  },
  methods: {
    scrollToTarget(targetId) {
      const element = document.getElementById(targetId.replace('#', ''))
      const target = getScrollTarget(element)
      const offset = element.offsetTop
      const velocity = 3
      setVerticalScrollPosition(target, offset, Math.abs(window.scrollY - offset) / velocity)
    }
  }
};
</script>

<style lang="scss" scoped>
.header-navigation {
  display: flex;
  align-items: center;

  .header-link {
    margin: 0 30px;
    transition: color 0.2s ease;

    &:hover {
      color: $primary;
    }
  }
}

</style>
