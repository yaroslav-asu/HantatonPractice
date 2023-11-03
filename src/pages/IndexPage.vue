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
import SecondSection from "src/layouts/Main/sections/Second/SecondSection";
import ThirdSection from "src/layouts/Main/sections/Third/ThirdSection";
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

.second-section {
  padding-top: $header-height;
}

.third-section {
  padding-top: $header-height;
}
</style>
