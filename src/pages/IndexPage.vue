
<template>
  <q-page>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <LastSection/>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FirstSection from "src/layouts/Main/sections/First/FirstSection.vue";
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
