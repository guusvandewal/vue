<script>
import Form from "./components/Form.vue";
import CustomButton from "./components/CustomButton.vue";
import CustomInput from "./components/CustomInput.vue";
export default {
  components: {
    Form,
    CustomButton,
    CustomInput
  },
  data() {
    return {
     postFontSize: 1,
     msg: 'Click me: '
    }
  },
  methods: {
    resize(e) {
      l(e)
    },
  }
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Form msg="This is a bootstrapped form" />
  <div class="move-down" :style="{ fontSize: postFontSize + 'em' }">
    <CustomButton :msg="msg" @enlarge-text="postFontSize += $event" />
    <CustomButton msg="You really clicked me: " />
    <CustomButton title="You sure clickrred me: " />
<!--    <custom-input v-model="searchText" @update:model-value="searchText = $event"></custom-input>
    <custom-input v-model="searchText" :model-value="searchText" @update:model-value="resize"></custom-input>-->

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
