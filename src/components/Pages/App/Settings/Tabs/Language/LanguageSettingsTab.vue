<template>
  <SettingsTab
    :title="$t('settings.language.title')"
    :description="$t('settings.language.description')"
    :buttons="false"
  >
    <SettingsSelectSection
      :title="$t('settings.language.currentLanguage')"
      v-model="model"
      :options="options"
    />
  </SettingsTab>
</template>

<script>
import SettingsSelectSection from "components/Pages/App/Settings/Tabs/Section/Select/SettingsSelectSection";
import SettingsTab from "components/Pages/App/Settings/Tabs/SettingsTab";
import { Cookies } from "quasar";

export default {
  name: "LanguageSettingsTab",
  components: {
    SettingsTab,
    SettingsSelectSection
  },
  data() {
    let options = [
      { label: "English", value: "en-US" },
      { label: "Русский", value: "ru-RU" }
    ];

    return {
      model: this.getCurrentLang(options),
      options: options
    };
  },
  methods: {
    getCurrentLang(options) {
      let savedLocale = Cookies.get("locale");
      let lang = savedLocale ? savedLocale : this.$i18n.locale;
      return options.find(option => option.value === lang);
    }
  },
  watch: {
    model() {
      Cookies.set("locale", this.model.value);
      this.$i18n.locale = this.model.value;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
