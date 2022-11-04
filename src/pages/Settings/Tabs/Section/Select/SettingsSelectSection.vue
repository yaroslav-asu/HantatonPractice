<template>
  <SettingsSection
    :title="title"
  >
    <q-select
      v-model="model"
      :options="options"
      outlined
      dense
    />
  </SettingsSection>
</template>

<script>
import SettingsSection from "pages/Settings/Tabs/Section/SettingsSection";

export default {
  name: "SettingsSelectSection",
  components: {
    SettingsSection
  },
  props: {
    title: {
      type: String,
      required: true
    },
    modelValue: {
      type: Object,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  watch: {
    model(){
      this.$emit("update:modelValue", this.model);
    },
    modelValue(){
      this.model = this.modelValue;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
