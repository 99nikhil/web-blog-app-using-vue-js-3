import { createPinia } from "pinia";
import router from "../router";

export default function registerPlugins(app) {
  app.use(router).use(createPinia());
}
