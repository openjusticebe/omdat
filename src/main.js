import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import VueApexCharts from "vue3-apexcharts";

import "./assets/styles/custom.scss";


const app = createApp(App)

app.use(VueApexCharts);

// Register every components in ./components DIR
const files = require.context('./components/', true, /\.vue$/i)
console.log(files);
files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))

app.use(router).mount('#app')
