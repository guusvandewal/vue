import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
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

app.mount('#app')
