import { createApp } from "vue";
import router from "./router/index";
import "./styles/index";
// import "./assets/font/iconfont.css";
import "./assets/font/linkCss.css";
import App from "./App.vue";

// 统一不同设备和浏览器的样式
// import "normalize.css";

createApp(App).use(router).mount("#app");
