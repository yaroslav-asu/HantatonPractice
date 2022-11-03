<template>
  <SettingsTab
    :title="$t('settings.language.title')"
    :description="$t('settings.language.description')"
    :submit-func="()=> {}"
    :save-button-title="$t('buttons.save')"
  >
    <SettingsSelectSection
      :title="$t('settings.language.currentLanguage')"
      v-model="model"
      :options="options"
    />

  </SettingsTab>
</template>

<script>
import SettingsSelectSection from "pages/Settings/Tabs/Section/Select/SettingsSelectSection";
import SettingsTab from "pages/Settings/Tabs/SettingsTab";

export default {
  name: "LanguageSettingsTab",
  components: {
    SettingsTab,
    SettingsSelectSection
  },
  data() {
    let options = [
      { label: "English", value: "en" },
      { label: "Русский", value: "ru" }
    ];
    return {
      model: options[0],
      options: options
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
