import { App } from "vue";
import HelloWord from "./components/HelloWorld.vue";

const plugins = {
  install: (app: App) => {
    app.config.globalProperties.$echo = () => {
      console.log("a plugin");
    };
    app.component("hello-word", HelloWord);
    app.provide("test", { message: "from plugin" });
  },
};

export default plugins;
