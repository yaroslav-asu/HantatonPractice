<template>
  <q-page>
    <FirstSection id="greeting"/>
    <SecondSection id="about"/>
    <ThirdSection id="functionality"/>
    <LastSection/>
  </q-page>
</template>

<script>
import {defineComponent} from "vue";
import FirstSection from "layouts/Main/sections/GreetingSection.vue";
import SecondSection from "layouts/Main/sections/AboutSection.vue";
import ThirdSection from "layouts/Main/sections/FeaturesSection.vue";
import LastSection from "src/layouts/Main/sections/Last/LastSection";


export default defineComponent({
  name: "MainLayout",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    LastSection,
  }
});
</script>

<style lang="scss" scoped>
.about-section {
  padding-top: $header-height;
}
</style>
