import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import Header from './views/Header.vue'
import Antd from 'ant-design-vue';

const app = createApp(App);
app.component('Header',Header)
app.use(router).use(Antd)

app.mount('#app')