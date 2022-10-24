<template>
  <q-layout>
    <HeaderComponent></HeaderComponent>
    <FirstSection></FirstSection>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import FirstSection from "src/sections/First/FirstSection.vue";
import HeaderComponent from "components/Core/Header/HeaderComponent";


export default defineComponent({
  name: "MainLayout",
  components: {
    HeaderComponent,
    FirstSection
  }


});
</script>
