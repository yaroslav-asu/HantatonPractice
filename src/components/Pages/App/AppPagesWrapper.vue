<template>
  <q-page class="app-page">
    <div class="wrapper" :style="wrapperStyle">
      <slot/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AppPagesWrapper",
  props: {
    wrapperStyle: {
      type: Object,
    }
  }
};
</script>

<style lang="scss" scoped>
.app-page {
  height: 100vh;
  padding: 20px;

  .wrapper {
    border-radius: 20px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: $lite-shadow-1;
  }
}
</style>
