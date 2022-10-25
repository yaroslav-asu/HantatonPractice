<template>
  <q-layout>
    <HeaderComponent />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import FirstSection from "src/sections/First/FirstSection.vue";
import HeaderComponent from "components/Core/Header/HeaderComponent";
import SecondSection from "src/sections/Second/SecondSection";
import ThirdSection from "src/sections/Third/ThirdSection";


export default defineComponent({
  name: "MainLayout",
  components: {
    ThirdSection,
    HeaderComponent,
    FirstSection,
    SecondSection
  }
});
</script>

<style lang="scss" scoped>
.first-section {
  padding-top: $header-height;
  height: 100vh;
}

.second-section {
  padding-top: $header-height;
  height: 100vh;
}

.third-section {
  padding-top: $header-height;
  height: 100vh;
}
</style>
