import { PluginObject } from "vue";
import { directive } from "./directive";

export const plugin: PluginObject<any> = {
  install: (Vue) => {
    Vue.directive("emoji-party", directive);
  },
};
