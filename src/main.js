import { createApp } from 'vue'
import App from './App.vue'
import ui from '@/components/UI';
import router from "@/router/router";
import store from "@/store"

const app = createApp(App)

ui.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .mount('#app');
