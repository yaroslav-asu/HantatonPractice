<template>
  <section class="settings_section">
    <p class="settings_section__title">
      {{ title }}
    </p>
    <slot/>
  </section>
</template>

<script>
export default {
  name: "SettingsSection",
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

.settings_section__input {
  display: inline-block;
  width: 50%;
  float: right;
  margin-right: 20%;
}
</style>
