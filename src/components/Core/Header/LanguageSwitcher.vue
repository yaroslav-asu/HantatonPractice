<template>
  <q-select
    class="language-switcher"
    borderless
    :options="languageSwitcher.languages"
    v-model="model"
  />
</template>

<script>
import LanguageSwitcher from "src/js/LanguageSwitcher";

export default {
  name: "LanguageSwitcher",
  data() {
    const languages = [
      {label: "🇺🇸", value: "en-US"},
      {label: "🇷🇺", value: "ru-RU"}
    ];
    const languageSwitcher = new LanguageSwitcher(this.$i18n, languages)
    return {
      languageSwitcher,
      model: languageSwitcher.currentLang
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
.language-switcher {
  font-size: 20px;
}
</style>
<style lang="scss">
.q-field__append {
  padding-left: 0 !important;
}
</style>
