<template>
  <q-layout class="app">
    <div class="limiter">
      <AppNavigation/>
      <q-page-container class="content">
        <router-view/>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import AppNavigation from "components/Layout/AppNavigation.vue";

export default {
  name: "ProfilePage",
  components: {AppNavigation},
};
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: max(100dvh, 600px);

  .limiter {
    height: 100%;
    display: flex;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;

    .content {
      flex-grow: 1;
    }
  }
}

@media (max-width: 1300px) {
  .content {
    padding-left: 90px;
  }
}

@media (max-width: 768px) {
  .content {
    padding-left: 70px;
  }
}
</style>
