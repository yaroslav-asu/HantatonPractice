<template>
  <SettingsTab
    :title="$t('settings.language.title')"
    :description="$t('settings.language.description')"
    :buttons="false"
  >
    <SettingsSelectSection
      :title="$t('settings.language.currentLanguage')"
      v-model="model"
      :options="languageSwitcher.options"
    />
  </SettingsTab>
</template>

<script>
import SettingsSelectSection from "components/Pages/App/Settings/Tabs/Section/Select/SettingsSelectSection";
import SettingsTab from "components/Pages/App/Settings/Tabs/SettingsTab";
import {Cookies} from "quasar";
import LanguageSwitcher from "src/js/LanguageSwitcher";

export default {
  name: "LanguageSettingsTab",
  components: {
    SettingsTab,
    SettingsSelectSection
  },
  data() {
    const languages = [
      {label: "English", value: "en-US"},
      {label: "Русский", value: "ru-RU"}
    ];
    const languageSwitcher = new LanguageSwitcher(this.$i18n, languages)
    return {
      model: languageSwitcher.currentLang,
      languageSwitcher,
    };
  },
  watch: {
    model() {
      this.languageSwitcher.changeLang(this.model);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
