<template>
  <q-layout>
    <HeaderComponent></HeaderComponent>
    <FirstSection></FirstSection>
    <CompaniesSection></CompaniesSection>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import FirstSection from "src/sections/First/FirstSection.vue";
import HeaderComponent from "components/Core/Header/HeaderComponent";
import CompaniesSection from "src/sections/CompaniesSection/CompaniesSection";


export default defineComponent({
  name: "MainLayout",
  components: {
    HeaderComponent,
    FirstSection,
    CompaniesSection,
  }


});
</script>

<style lang="scss" scoped>
  .first-section{
    padding-top: 98px;
    height: 100vh;
  }
</style>
