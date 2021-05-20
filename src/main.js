import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import VueApexCharts from "vue3-apexcharts";
import VueMarkdownIt from 'vue3-markdown-it';
import messages from "./locales/translations.json"; 

import "./assets/styles/custom.scss";

const i18n = createI18n({ 
  locale: localStorage.getItem("locale") || 'en', // set locale
  messages, // set locale messages
})

i18n.locale = 'en'

const app = createApp(App)

app.use(i18n);
app.use(VueApexCharts);
app.use(VueMarkdownIt);

// Register every components in ./components DIR
const files = require.context('./components/', true, /\.vue$/i)
console.log(files);
files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))


router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
    next();
  })


app.use(router).mount('#app')
