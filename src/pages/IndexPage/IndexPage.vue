<template>
  <q-page>
    <GreetingSection id="greeting"/>
    <AboutSection id="about"/>
    <FeaturesSection id="functionality"/>
    <StartSection/>
  </q-page>
</template>

<script>
import {defineComponent} from "vue";
import GreetingSection from "pages/IndexPage/sections/GreetingSection.vue";
import AboutSection from "pages/IndexPage/sections/AboutSection.vue";
import FeaturesSection from "pages/IndexPage/sections/FeaturesSection.vue";
import StartSection from "pages/IndexPage/sections/StartSection.vue";


export default defineComponent({
  name: "MainLayout",
  components: {
    GreetingSection,
    AboutSection,
    FeaturesSection,
    StartSection,
  }
});
</script>
