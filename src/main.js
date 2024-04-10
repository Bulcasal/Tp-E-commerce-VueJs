import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router';
// import FontAwesomePlugin from "./plugins/FontAwesome";

import AppButton from "./components/AppButton.vue";
import AppCountInput from "./components/AppCountInput.vue";
import AppModalOverlay from "./components/AppModalOverlay.vue";

const pinia = createPinia()
createApp(App).use(pinia)
createApp(App).use(router)
.component("AppButton", AppButton)
.component("AppCountInput", AppCountInput)
.component("AppModalOverlay", AppModalOverlay)

.mount('#app');


// createApp(App)
//   .use(createPinia())
// //   .use(FontAwesomePlugin)
//   .mount("#app");