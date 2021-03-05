// plugins/i18n.js

export default {
  install: (app, options) => {
    // Create global function $translate
    app.config.globalProperties.$translate = (key) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };

    app.provide("i18n", options);

    app.directive("my-directive", {
      mounted(el, binding, vnode, oldVnode) {
        // some logic ...
      },
    });

    app.mixin({
      created() {
        // some logic ...
      },
    });
  },
};
