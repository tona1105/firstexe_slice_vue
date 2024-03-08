
import './assets/css/main.css';
import './assets/css/responsive.css';
import { createApp } from 'vue';
import App from './App.vue';
import LazyComponent from 'v-lazy-component'



const app = createApp(App);


app.use(LazyComponent)
app.mount('#app');