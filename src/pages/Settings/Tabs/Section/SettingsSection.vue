<template>
  <section class="settings_section">
    <p class="settings_section__title">
      {{ title }}
    </p>
    <div class="settings_section__content">
      <slot
        :bind="{
        value: model
      }"
        :on="{
        input: updateValue,
        change: updateValue,
      }"
      />
    </div>

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
  },
  data() {
    return {
      model: this.modelValue
    };
  },
  methods: {
    updateValue(value) {
      this.model = value;
      this.$emit("update:modelValue", value);
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
