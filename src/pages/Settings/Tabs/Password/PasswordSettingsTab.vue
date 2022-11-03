<template>
  <SettingTab
    :title="$t('settings.password.title')"
    :description="$t('settings.password.currentPassword')"
    :submit-func="()=> {}"
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
  </SettingTab>
</template>

<script>
import SettingTab from "pages/Settings/Tabs/SettingsTab";
import SettingsInputSection from "pages/Settings/Tabs/Section/SettingsInputSection";

export default {
  name: "PasswordTab",
  components: {
    SettingTab,
    SettingsInputSection
  },

  methods: {
    changePassword() {
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
