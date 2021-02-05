import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import VueApexCharts from "vue3-apexcharts";
import VueMarkdownIt from 'vue3-markdown-it';

import "./assets/styles/custom.scss";

const app = createApp(App)

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
