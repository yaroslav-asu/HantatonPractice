<template>
  <q-form
    @submit.prevent="changePassword"
  >
    <section class="password-tab_section">
      <h4 class="title">
        {{ $t("settings.password.title") }}
      </h4>
      <p class="description">
        {{ $t("settings.password.description") }}
      </p>
    </section>
    <section class="password-tab_section">
      <p class="section-title">
        {{ $t("settings.password.currentPassword") }}
      </p>
      <q-input
        class="
            input--bald-border
            input--rounded-border-radius
            input--gray-border
            section-input
          "
        outlined
        dense
        v-model="currentPassword"
      />
    </section>
    <section class="password-tab_section">
      <p class="section-title">
        {{ $t("settings.password.newPassword") }}
      </p>
      <q-input
        class="
            input--bald-border
            input--rounded-border-radius
            input--gray-border
            section-input
            input-hint--custom
          "
        outlined
        dense
        :hint="$t('settings.password.newPasswordHint')"
        v-model="newPassword1"
      />
    </section>
    <section class="password-tab_section">
      <p class="section-title">
        {{ $t("settings.password.confirmNewPassword") }}
      </p>
      <q-input
        class="
            input--bald-border
            input--rounded-border-radius
            input--gray-border
            section-input
          "
        outlined
        dense
        v-model="newPassword2"
      />
    </section>
    <section class="password-tab_btn-section">
      <q-btn
        class="button cancel-btn"
        :label="$t('buttons.cancel')"
        color="primary"
        outline
        :ripple="false"
        no-caps
      />
      <q-btn
        class="button"
        :label="$t('settings.password.updatePassword')"
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
  name: "PasswordTab",
  methods: {
    changePassword() {
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

.password-tab_section {
  padding: 20px 0;
  border-bottom: 2px solid $grey;
  overflow: auto;
}

.section-title {
  font-weight: 500;
  float: left;
  display: inline-block;
}

.section-input {
  display: inline-block;
  width: 50%;
  float: right;
  margin-right: 20%;
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
