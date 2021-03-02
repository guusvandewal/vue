<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Form msg="This is a bootstrapped form" />
  <div class='move-down'>
    <CustomButton msg="You clicked me: " />
    <CustomButton msg="You really clicked me: "/>
    <CustomButton msg="You sure clicked me: "/>
  </div>

</template>

<script setup>

import Form from './components/Form.vue'
import CustomButton from './components/CustomButton.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.move-down {
  margin-top: 200px;
}
</style>