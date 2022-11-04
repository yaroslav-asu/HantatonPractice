<template>
  <SettingsTab
    :title="$t('settings.password.title')"
    :description="$t('settings.password.description')"
    :submit-func="changePassword"
    :save-button-title="$t('settings.password.updatePassword')"
  >
    <SettingsInputSection
      :title="$t('settings.password.currentPassword')"
      v-model="currentPassword"
    />
    <SettingsInputSection
      :title="$t('settings.password.newPassword')"
      :input-hint="$t('settings.password.newPasswordHint')"
      v-model="newPassword1"
    />
    <SettingsInputSection
      :title="$t('settings.password.confirmNewPassword')"
      v-model="newPassword2"
    />
  </SettingsTab>
</template>

<script>
import SettingsTab from "components/Pages/App/Settings/Tabs/SettingsTab";
import SettingsInputSection from "components/Pages/App/Settings/Tabs/Section/Input/SettingsInputSection";

export default {
  name: "PasswordTab",
  components: {
    SettingsTab,
    SettingsInputSection
  },

  methods: {
    changePassword() {
      console.log("changePassword");
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
