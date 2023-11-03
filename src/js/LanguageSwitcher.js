import {Cookies} from "quasar";

export default class LanguageSwitcher {
  constructor(i18n, languages) {
    this.languages = languages;
    this.i18n = i18n;
  }

  get currentLang() {
    let savedLocale = Cookies.get("locale");
    let lang = savedLocale ? savedLocale : this.i18n.locale;
    return this.languages.find(option => option.value === lang);
  }

  changeLang(lang) {
    Cookies.set("locale", lang.value);
    this.i18n.locale = lang.value;
  }
}
