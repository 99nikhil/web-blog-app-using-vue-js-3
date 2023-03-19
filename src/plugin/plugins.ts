import { createPinia } from "pinia";
import router from "../router";
import ChakraUIVuePlugin from "@chakra-ui/vue-next";
import { Quasar, Notify } from "quasar";

export default function registerPlugins(app) {
  app.use(router).use(createPinia()).use(ChakraUIVuePlugin).use(Quasar, {
    plugins: {
      Notify,
    },
    config: {},
  });
}
