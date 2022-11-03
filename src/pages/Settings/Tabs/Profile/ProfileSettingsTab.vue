<template>
  <SettingTab
  :title="$t('settings.profile.title')"
  :description="$t('settings.profile.description')"
  :saveButtonTitle="$t('buttons.save')"
  :submitFunc="() => {}"
  >

  </SettingTab>
</template>

<script>
import SettingTab from "/src/pages/Settings/Tabs/SettingsTab.vue";

export default {
  name: "ProfileSettingsTab",
  components: {
    SettingTab
  }

};
</script>

<style lang="scss" scoped>

</style>
