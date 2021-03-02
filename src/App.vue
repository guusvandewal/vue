<script setup>
import Form from "./components/Form.vue";
import CustomButton from "./components/CustomButton.vue";
import { ref } from '@vue/reactivity'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

// Not possible with vue3?
/*
export default {
 components: CustomButton,
  props: [
    'msg',
    'customProp'
  ]
}
*/

/*
const onEnlargeText = (e) => {
  l(e);
}
*/

function onEnlargeText() {
  console.log(this)
  //this.postFontSize += enlargeAmount
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Form msg="This is a bootstrapped form" />
  <div class="move-down" :style="{ fontSize: postFontSize += 0.2 }">
    <CustomButton :msg=msg @enlarge-text="postFontSize += 0.2"/>
    <CustomButton msg="You really clicked me: " />
    <CustomButton title="You sure clickrred me: " />
  </div>
</template>

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
