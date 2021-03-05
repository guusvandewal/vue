import { createApp } from 'vue'
import App from './App.vue'
import i18nPlugin from './plugins/i18n'

const app = createApp(App)
const i18nStrings = {
  greetings: {
    hi: 'Hallo!',
    Hi: 'Hi There',
    Bye: 'See ya'
  }
}

app.config.errorHandler = (err, vm, info) => {
  l(err)
  // handle error
  // `info` is a Vue-specific error info, e.g. which lifecycle hook
  // the error was found in
}
// @TODO Understand this exactly
app.component('blog-post', {
  props: ['title'],
  template: `<h4>{{ title }}</h4>`
})
app.directive('focus', {
  /*mounted(el) {
    el.focus()
  }*/
})

app.use(i18nPlugin, i18nStrings)
app.mount('#app')
