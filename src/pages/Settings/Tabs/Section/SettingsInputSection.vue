<template>
  <section class="settings_section">
    <p class="settings_section__title">
      {{ title }}
    </p>
    <q-input
      class="
            input--bald-border
            input--rounded-border-radius
            input--gray-border
            settings_section__input
            input-hint--custom
            "
      outlined
      dense
      :hint="inputHint"
      v-model="model"
      v-if="inputHint && inputHint.length > 0"
    />
    <q-input
      class="
            input--bald-border
            input--rounded-border-radius
            input--gray-border
            settings_section__input
            input-hint--custom
            "
      outlined
      dense

      v-model="model"
      v-else
    />

  </section>
</template>

<script>
export default {
  name: "SettingsInputSection",
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
.settings_section {
  padding: 20px 0;
  border-bottom: 2px solid $grey;
  overflow: auto;
}

.settings_section__title {
  font-weight: 500;
  float: left;
  display: inline-block;
}

.settings_section__input {
  display: inline-block;
  width: 50%;
  float: right;
  margin-right: 20%;
}
</style>
