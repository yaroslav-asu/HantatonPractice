(()=>{"use strict";var e={4647:(e,t,r)=>{r(8964),r(702);var o=r(1957),i=r(3890),n=r(499),a=r(9835);function s(e,t,r,o,i,n){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const l=(0,a.aZ)({name:"App"});var c=r(1639);const d=(0,c.Z)(l,[["render",s]]),u=d;var p=r(3340),h=r(8339);const m=[{path:"/",component:()=>Promise.all([r.e(736),r.e(579)]).then(r.bind(r,9579)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(590)]).then(r.bind(r,2590))}]},{path:"/settings",component:()=>Promise.all([r.e(736),r.e(384)]).then(r.bind(r,5384)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(225)]).then(r.bind(r,4225))}]},{path:"/dashboard",component:()=>Promise.all([r.e(736),r.e(384)]).then(r.bind(r,5384)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(818)]).then(r.bind(r,6818))}]},{path:"/profile",component:()=>Promise.all([r.e(736),r.e(384)]).then(r.bind(r,5384)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(732)]).then(r.bind(r,6732))}]},{path:"/user-card/:id",component:()=>Promise.all([r.e(736),r.e(384)]).then(r.bind(r,5384)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(781)]).then(r.bind(r,5781))}]},{path:"/login",component:()=>Promise.all([r.e(736),r.e(632)]).then(r.bind(r,7632))},{path:"/register",component:()=>Promise.all([r.e(736),r.e(632)]).then(r.bind(r,7632))},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],f=m,g=(0,p.BC)((function(){const e=h.PO;return(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:e("/hackathon-practice/")})}));async function v(e,t){const r=e(u);r.use(i.Z,t);const o=(0,n.Xl)("function"===typeof g?await g({}):g);return{app:r,router:o}}var b=r(4006);const w={config:{},plugins:{Cookies:b.Z}},y="/hackathon-practice/",P=/\/\//,S=e=>(y+e).replace(P,"/");async function C({app:e,router:t},r){let o=!1;const i=e=>{try{return S(t.resolve(e).href)}catch(r){}return Object(e)===e?null:e},n=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},a=window.location.href.replace(window.location.origin,"");for(let l=0;!1===o&&l<r.length;l++)try{await r[l]({app:e,router:t,ssrContext:null,redirect:n,urlPath:a,publicPath:y})}catch(s){return s&&s.url?void n(s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&(e.use(t),e.mount("#q-app"))}v(o.ri,w).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,4593)),Promise.resolve().then(r.bind(r,1180)),Promise.resolve().then(r.bind(r,8473))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));C(e,r)}))}))},8473:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(3340),i=r(476),n=r(6143);const a=(0,o.xr)((()=>{i.kL.register(n.Z)}))},4593:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m,t:()=>h});r(6727);var o=r(3340),i=r(3276);const n={pages:{home:"Home",portfolio:"Portfolio",howItWorks:"How it works",team:"Team",settings:"Settings",dashboard:"Dashboard",profile:"Profile",logout:"Logout",about:"About",functionality:"Functionality"},dashboard:{progress:{1:{title:"Preparation",description:"Preparing for the project"},2:{title:"Design",description:"Creating design"},3:{title:"Development",description:"Website development"},4:{title:"Testing",description:"Website testing"},additional:{title:"Progress",description:"You can see the progress of your project here"}},pie:{title:"Statistics"},bar:{title:"Recent Projects",description:"Recent projects you've worked on"},line:{title:"Projects",description:"Projects you've worked on"}},settings:{password:{title:"Password",description:"Please enter your current password to change your password",currentPassword:"Current password",newPassword:"New password",confirmNewPassword:"Confirm new password",newPasswordHint:"Your new password must be at least 8 characters.",updatePassword:"Update password"},profile:{title:"Profile",description:"Edit your profile information"},language:{title:"Language",description:"Select your preferred language",currentLanguage:"Current language"}},greetingSection:{thematic:"Creative Design \n& Experience",description:"We are a team of professionals in the field of web development and design. We create websites."},secondSection:{title:"A new site for your agency? It's here!"},thirdSection:{title:"Our functionality",description:"We create websites that are easy to use and have a beautiful design."},lastSection:{title:"Enough Talk, Let's Build Something",description:"Join to us to feel the power of our team!"},errors:{required:"This field is required",email:"Invalid email",shortPassword:"Password must be at least 8 characters long",tooLongValue:"Value is too long",fieldRequired:"This field is required",invalidPhone:"Invalid phone number",invalidUsername:"Invalid username",invalidEmail:"Invalid email",invalidEmailDomain:"Invalid email domain",passwordsMustMatch:"Passwords must match",confirmCodeIsntRight:"Confirm code isn't right"},emailInput:{placeholder:"Type your email here"},servicePros:{first:{title:"Successful projects",description:"We have been working for 5 years and have completed more than 100 projects."},second:{title:"Professional team",description:"We have a team of professionals in the field of web development and design."},third:{title:"Affordable prices",description:"We offer affordable prices for our services."}},learnMore:"Learn more",more:"More",letsStart:"Let's start",footer:{description:"We are a team of professionals in the field of web development and design. We create websites.",about:"About",company:"Company",support:"Support",aboutUs:"About us",ourTeam:"Our team",ourServices:"Our services",ourClients:"Our clients",contactUs:"Contact us",ourAddress:"Our address",ourPhone:"Our phone",ourEmail:"Our email",faq:"FAQ",privacyPolicy:"Privacy policy",termsOfUse:"Terms of use"},menu:"Menu",login:"Login",signUp:"Sign up",signup:"Sign up",email:"Email",password:"Password",register:"Register",togglePasswordVisibility:"Toggle password visibility",showPassword:"Show password",hidePassword:"Hide password",rememberMe:"Remember me",forgotPassword:"Forgot password?",dontHaveAccount:"Don't have an account?",alreadyHaveAccount:"Already have an account?",userEntry:{menu:{signOut:"Sign out",profile:"Profile"}},buttons:{cancel:"Cancel",save:"Save"},firstName:"First name",lastName:"Last name",serviceFeatures:{1:{title:"Fast",description:"Very fast"},2:{title:"User friendly",description:"Very user friendly"},3:{title:"Secure",description:"Very secure"},4:{title:"Informative",description:"Highly informative"},5:{title:"Customizable",description:"Highly customizable"},6:{title:"Multilingual",description:"Supports multiple languages"},7:{title:"Responsive",description:"Fully responsive design"},8:{title:"Cost-effective",description:"Cost-effective solution"},9:{title:"Time-saving",description:"Saves you time"}}},a={pages:{home:"Главная",portfolio:"Портфолио",howItWorks:"Как это работает",team:"Команда",settings:"Настройки",dashboard:"Дэшборд",profile:"Профиль",logout:"Выйти",about:"О нас",functionality:"Возможности"},dashboard:{progress:{1:{title:"Подготовка",description:"Подготовка к проекту"},2:{title:"Дизайн",description:"Создание дизайна"},3:{title:"Разработка",description:"Разработка сайта"},4:{title:"Тесты",description:"Тестирование сайта"},additional:{title:"Прогресс",description:"Здесь вы можете увидеть прогресс вашего проекта"}},pie:{title:"Статистика"},bar:{title:"Последние проекты",description:"Последние проекты, над которыми вы работали"},line:{title:"Проекты",description:"Проекты, над которыми вы работали"}},settings:{password:{title:"Пароль",description:"Пожалуйста, введите ваш текущий пароль, для изменения пароля",currentPassword:"Текущий пароль",newPassword:"Новый пароль",confirmNewPassword:"Подтвердите новый пароль",newPasswordHint:"Ваш новый пароль должен быть не менее 8 символов.",updatePassword:"Обновить пароль"},profile:{title:"Профиль",description:"Измените информацию о вашем профиле"},language:{title:"Язык",description:"Выберите предпочитаемый язык",currentLanguage:"Текущий язык"}},greetingSection:{thematic:"Творческий дизайн \n& Опыт",description:"Мы команда профессионалов в области веб-разработки и дизайна. Мы создаем сайты."},secondSection:{title:"Новый сайт для вашего агентства? Здесь!"},thirdSection:{title:"Наши возможности",description:"Мы создаем сайты, которые легко использовать и имеют красивый дизайн."},lastSection:{title:"Давайте построим что-нибудь!",description:"Присоединяйтесь к нам, чтобы почувствовать силу нашей команды!"},errors:{required:"Это поле обязательно для заполнения",email:"Пожалуйста, введите действительный адрес электронной почты",shortPassword:"Пароль должен быть не менее 8 символов",tooLongValue:"Слишком длинное значение",fieldRequired:"Это поле обязательно для заполнения",invalidPhone:"Пожалуйста, введите действительный номер телефона",invalidUsername:"Пожалуйста, введите действительное имя пользователя",invalidEmail:"Пожалуйста, введите действительный адрес электронной почты",invalidEmailDomain:"Пожалуйста, введите действительный адрес электронной почты",passwordsMustMatch:"Пароли должны совпадать",confirmCodeIsntRight:"Подтверждение кода неверно"},emailInput:{placeholder:"Ваш email"},servicePros:{first:{title:"Создание сайтов",description:"Мы создаем сайты, которые легко использовать и имеют красивый дизайн."},second:{title:"Создание приложений",description:"Мы создаем приложения, которые легко использовать и имеют красивый дизайн."},third:{title:"Создание мобильных приложений",description:"Мы создаем мобильные приложения, которые легко использовать и имеют красивый дизайн."}},learnMore:"Узнать больше",more:"Еще",letsStart:"Начнем!",footer:{description:"Мы команда профессионалов в области веб-разработки и дизайна. Мы создаем сайты.",about:"О нас",company:"Компания",support:"Поддержка",aboutUs:"О нас",ourTeam:"Наша команда",ourServices:"Наши услуги",ourClients:"Наши клиенты",contactUs:"Свяжитесь с нами",ourAddress:"Наш адрес",ourPhone:"Наш телефон",ourEmail:"Наша электронная почта",faq:"FAQ",privacyPolicy:"Политика конфиденциальности",termsOfUse:"Условия использования"},menu:"Меню",login:"Войти",signUp:"Регистрация",signup:"Регистрация",register:"Регистрация",forgotPassword:"Забыли пароль?",rememberMe:"Запомнить меня",email:"Электронная почта",password:"Пароль",dontHaveAccount:"У вас нет аккаунта?",alreadyHaveAccount:"У вас уже есть аккаунт?",userEntry:{menu:{signOut:"Выйти",profile:"Профиль"}},buttons:{cancel:"Отмена",save:"Сохранить"},firstName:"Имя",lastName:"Фамилия",serviceFeatures:{1:{title:"Быстро",description:"Очень быстро"},2:{title:"Удобный для пользователей",description:"Очень удобный для пользователей"},3:{title:"Безопасный",description:"Очень безопасный"},4:{title:"Информативный",description:"Высоко информативный"},5:{title:"Настраиваемый",description:"Очень настраиваемый"},6:{title:"Многоязычный",description:"Поддерживает несколько языков"},7:{title:"Адаптивный",description:"Полностью адаптивный дизайн"},8:{title:"Экономичный",description:"Экономичное решение"},9:{title:"Экономия времени",description:"Экономит ваше время"}}},s={"en-US":n,"ru-RU":a};var l=r(4006),c=r(3890);const d=l.Z.get("locale");let u=d||c.Z.lang.getLocale().toLowerCase();u=u.includes("ru")||u.includes("by")||u.includes("ua")?"ru-RU":(u.includes("en")||u.includes("us")||u.includes("uk"),"en-US");const p=(0,i.o)({locale:u,messages:s}),h=p.global.t,m=(0,o.xr)((({app:e})=>{e.use(p)}))},1180:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var o=r(3340);class i{constructor(e){this.email=e.email?e.email:"",this.password1="",this.password2="",this.photoUrl=e.photoUrl?e.photoUrl:"",this.firstName=e.firstName?e.firstName:"",this.lastName=e.lastName?e.lastName:""}static register(){}login(){}logout(){}changeName(e){}changeSurname(e){}changePassword(e,t){}changePhoto(e){}}const n=(0,o.xr)((({app:e})=>{e.config.globalProperties.$user=new i({email:"user@gmail.com",photoUrl:"https://sun1-26.userapi.com/s/v1/ig2/LV10_OFN1o0g-pjzVrAIZlg9iPwNxsaSzE2IZTkjvdVNNWcinl88L_zDIWwaGizbTFj4XX24c90UgHwg-9zwxZEN.jpg?size=200x200&quality=95&crop=102,0,581,581&ava=1"})}))}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(t,o,i,n)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){for(var[o,i,n]=e[d],s=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,n<a&&(a=n));if(s){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,i,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{225:"efd3da8e",384:"84c9b491",579:"bffab8ba",590:"4f7b56e4",632:"49871574",732:"56c9c7a1",781:"dd3fc453",818:"1e812bba",862:"5a340b2f"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"e57d6bcb",225:"b2ba7a31",384:"8efb6262",579:"da6f5b62",590:"733a1b1c",632:"4ee5281c",732:"6abd79d6",736:"c61566ea",781:"8f2ca51a",818:"7f18ca3e"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="practichackathonproject:";r.l=(o,i,n,a)=>{if(e[o])e[o].push(i);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+n),s.src=o),e[o]=[i];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(h);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(r))),t)return t(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/hackathon-practice/"})(),(()=>{var e=(e,t,r,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var n=n=>{if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=n,i.href=t,document.head.appendChild(i),i},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var i=r[o],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){i=a[o],n=i.getAttribute("data-href");if(n===e||n===t)return i}},o=o=>new Promise(((i,n)=>{var a=r.miniCssF(o),s=r.p+a;if(t(a,s))return i();e(o,s,i,n)})),i={143:0};r.f.miniCss=(e,t)=>{var r={225:1,384:1,579:1,590:1,632:1,732:1,781:1,818:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=o(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var n=new Promise(((r,o)=>i=e[t]=[r,o]));o.push(i[2]=n);var a=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,i[1](s)}};r.l(a,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var i,n,[a,s,l]=o,c=0;if(a.some((t=>0!==e[t]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var d=l(r)}for(t&&t(o);c<a.length;c++)n=a[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},o=globalThis["webpackChunkpractichackathonproject"]=globalThis["webpackChunkpractichackathonproject"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4647)));o=r.O(o)})();