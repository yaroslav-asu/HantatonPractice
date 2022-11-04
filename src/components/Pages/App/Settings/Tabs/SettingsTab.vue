<template>
  <q-form
    @submit.prevent="submitFunc"
  >
    <section class="settings_section">
      <h4 class="title">
        {{ title }}
      </h4>
      <p class="description">
        {{ description }}
      </p>
    </section>
    <slot />
    <section
      class="password-tab_btn-section"
      v-if="buttons"
    >
      <q-btn
        class="button cancel-btn"
        :label="$t('buttons.cancel')"
        color="primary"
        flat
        :ripple="false"
        no-caps
      />
      <q-btn
        class="button"
        :label="saveButtonTitle"
        color="primary"
        :ripple="false"
        no-caps
        type="submit"
      />
    </section>
  </q-form>
</template>

<script>
export default {
  name: "SettingsTab",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    saveButtonTitle: {
      type: String
    },
    buttons: {
      type: Boolean,
      default: true
    },
    submitFunc: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 25px;
  font-weight: 600;

}

.description {
  font-size: 15px;
  font-weight: 500;
  opacity: .6;
}


.password-tab_btn-section {
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.cancel-btn {
  margin-right: 10px;
}

.button {
  height: 40px;
}
</style>
