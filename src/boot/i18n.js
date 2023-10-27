import {boot} from "quasar/wrappers";
import {createI18n} from "vue-i18n";
import messages from "src/i18n";
import {Quasar} from "quasar";


let locale = Quasar.lang.getLocale().toLowerCase()
if (locale.includes('ru') || locale.includes('by') || locale.includes('ua')) {
  locale = 'ru-RU'
} else if (locale.includes('en') || locale.includes('us') || locale.includes('uk')) {
  locale = 'en-US'
} else {
  locale = 'en-US'
}

const i18n = createI18n({
  locale: locale,
  messages
});
const t = i18n.global.t;

export default boot(({app}) => {
  app.use(
    i18n
  );
});

export {t};
