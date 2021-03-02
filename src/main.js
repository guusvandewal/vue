import { createApp } from 'vue'
import App from './App.vue'
const l = console.log
const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
  l(info)
  // handle error
  // `info` is a Vue-specific error info, e.g. which lifecycle hook
  // the error was found in
}

app.component('my-component', {
  /* ... */
})
  //.mount('#app')
l(app.config)
app.mount('#app')
