import { boot } from "quasar/wrappers";
import User from "src/js/User/User";

export default boot(({ app }) => {
  app.config.globalProperties.$user = new User({
    email: "yaroslav-filippov-2017@mail.ru",
    photoUrl: "https://sun1-26.userapi.com/s/v1/ig2/LV10_OFN1o0g-pjzVrAIZlg9iPwNxsaSzE2IZTkjvdVNNWcinl88L_zDIWwaGizbTFj4XX24c90UgHwg-9zwxZEN.jpg?size=200x200&quality=95&crop=102,0,581,581&ava=1"
  });
});
