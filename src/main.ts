import { createApp, provide, h } from "vue";
import {
  DefaultApolloClient,
  provideApolloClient,
} from "@vue/apollo-composable";

import getApolloClient from "./graphql/apolloClient";

import App from "./App.vue";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import BaseButton from "./components/UIs/BaseButton.vue";
import BaseSpinner from "./components/UIs/BaseSpinner.vue";

import registerPlugin from "./plugin/plugins";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import BaseCard from "./components/Layouts/BaseCard.vue";
import BaseCategoryCard from "./components/UIs/BaseCategoryCard.vue";

async function main() {
  const apolloClient = await getApolloClient();

  provideApolloClient(apolloClient);

  const app = createApp({
    setup() {
      provide(DefaultApolloClient, apolloClient);
    },
    render: () => h(App),
  });

  registerPlugin(app);
  app.component("QuillEditor", QuillEditor);

  app.component("base-card", BaseCard);
  app.component("base-category-card", BaseCategoryCard);
  app.component("base-button", BaseButton);
  app.component("base-spinner", BaseSpinner);
  app.mount("#app");
}
main();
