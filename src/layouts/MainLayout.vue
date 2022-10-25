<template>
  <q-layout>
    <HeaderComponent></HeaderComponent>
    <FirstSection></FirstSection>
    <SecondSection></SecondSection>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import FirstSection from "src/sections/First/FirstSection.vue";
import HeaderComponent from "components/Core/Header/HeaderComponent";
import SecondSection from "src/sections/Second/SecondSection";


export default defineComponent({
  name: "MainLayout",
  components: {
    HeaderComponent,
    FirstSection,
    SecondSection
  }
});
</script>

<style lang="scss" scoped>
.first-section {
  padding-top: 98px;
  height: 100vh;
}
</style>
