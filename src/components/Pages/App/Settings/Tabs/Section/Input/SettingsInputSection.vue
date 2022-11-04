<template>
  <SettingsSection
    :title="title"
  >
    <q-input
      class="input--bald-border
             input--rounded-border-radius
             input--gray-border
             input-hint--custom"
      outlined
      dense
      :hint="inputHint"
      v-model="model"
      v-if="inputHint && inputHint.length > 0"
    />
    <q-input
      class="input--bald-border
             input--rounded-border-radius
             input--gray-border
             input-hint--custom"
      outlined
      dense

      v-model="model"
      v-else
    />
  </SettingsSection>
</template>

<script>
import SettingsSection from "components/Pages/App/Settings/Tabs/Section/SettingsSection";

export default {
  name: "SettingsInputSection",
  components: {
    SettingsSection
  },

  props: {
    title: {
      type: String,
      required: true
    },
    inputHint: {
      type: String,
      default: null
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  watch: {
    modelValue() {
      this.model = this.modelValue;
    },
    model() {
      this.$emit("update:modelValue", this.model);
    }
  }

};
</script>

<style lang="scss" scoped>
.settings_section__title {
  font-weight: 500;
  float: left;
  display: inline-block;
}

.settings_section__content {
  display: inline-block;
  width: 50%;
  float: right;
  margin-right: 20%;
}
</style>
