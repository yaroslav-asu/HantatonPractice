import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";

const i18n = createI18n({
  locale: "en-US",
  messages
});
const t = i18n.global.t;

export default boot(({ app }) => {
  app.use(
    i18n
  );
});
export { t };
