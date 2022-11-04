import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import { Cookies } from "quasar";
import { Quasar } from "quasar";

let savedLocale = Cookies.get("locale");
let locale = savedLocale ? savedLocale : Quasar.lang.getLocale();

const i18n = createI18n({
  locale: locale,
  messages
});
const t = i18n.global.t;

export default boot(({ app }) => {
  app.use(
    i18n
  );
});

export { t };
