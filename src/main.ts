import { createApp } from "vue";

import App from "./App.vue";

import BaseInput from "./components/UIs/BaseInput.vue";
import BaseButton from "./components/UIs/BaseButton.vue";
import registerPlugin from "./plugin/plugins.js";

const app = createApp(App);
registerPlugin(app);
app.component("base-input", BaseInput);
app.component("base-button", BaseButton);

app.mount("#app");
