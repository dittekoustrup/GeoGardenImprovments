import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import 'grapesjs/dist/css/grapes.min.css';

const app = createApp(App);

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

app.use(createPinia());
app.use(router);

router.isReady().then(() => app.mount("#app")); 

