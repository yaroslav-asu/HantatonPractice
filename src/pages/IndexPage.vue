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
import GreetingSection from "layouts/Main/sections/GreetingSection.vue";
import AboutSection from "layouts/Main/sections/AboutSection.vue";
import FeaturesSection from "layouts/Main/sections/FeaturesSection.vue";
import StartSection from "layouts/Main/sections/StartSection.vue";


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
