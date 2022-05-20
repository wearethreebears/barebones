import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

const app = createApp(App);

if (process.env.NODE_ENV === 'development') {
    app.config.performance = true;
}

app.mount('#app');