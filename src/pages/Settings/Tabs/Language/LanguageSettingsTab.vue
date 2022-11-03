<template>
  <SettingsTab
    :title="$t('settings.language.title')"
    :description="$t('settings.language.description')"
    :submit-func="()=> {}"
    :save-button-title="$t('buttons.save')"
  >

  </SettingsTab>
</template>

<script>
import SettingsTab from "pages/Settings/Tabs/SettingsTab";
export default {
  name: "LanguageSettingsTab",
  components: {
    SettingsTab
  }
};
</script>

<style lang="scss" scoped>

</style>
