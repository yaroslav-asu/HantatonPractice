<template>
  <SettingTab
    :title="$t('settings.password.title')"
    :description="$t('settings.password.currentPassword')"
    :submit-func="()=> {}"
    :save-button-title="$t('settings.password.updatePassword')"
  >
        <section class="settings_section">
          <p class="settings_section__title">
            {{ $t("settings.password.currentPassword") }}
          </p>
          <q-input
            class="
                input--bald-border
                input--rounded-border-radius
                input--gray-border
                settings_section__input
              "
            outlined
            dense
            v-model="currentPassword"
          />
        </section>
        <section class="settings_section">
          <p class="settings_section__title">
            {{ $t("settings.password.newPassword") }}
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
            :hint="$t('settings.password.newPasswordHint')"
            v-model="newPassword1"
          />
        </section>
        <section class="settings_section">
          <p class="settings_section__title">
            {{ $t("settings.password.confirmNewPassword") }}
          </p>
          <q-input
            class="
                input--bald-border
                input--rounded-border-radius
                input--gray-border
                settings_section__input
              "
            outlined
            dense
            v-model="newPassword2"
          />
        </section>
  </SettingTab>
</template>

<script>
import SettingTab from "pages/Settings/Tabs/SettingsTab";

export default {
  name: "PasswordTab",
  components: {
    SettingTab
  },

  methods: {
    changePassword() {
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
