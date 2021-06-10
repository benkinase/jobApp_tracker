import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { devtools } from "@/utils";
import { store } from "./store/modules/Jobs";
import "./assets/sass/global.scss";

const app = createApp(App);
app.use(store);
app.use(devtools);
app.use(router);
app.mount("#app");
