<template>
  <q-page class="settings-page ">
    <div class="wrapper">
      <slot />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "AppPagesWrapper"
};
</script>

<style lang="scss" scoped>
.settings-page {
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
