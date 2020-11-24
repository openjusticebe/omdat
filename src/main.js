import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Register every components in ./components DIR
const files = require.context('./components/', true, /\.vue$/i)
console.log(files);
files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))

app.use(router).mount('#app')
