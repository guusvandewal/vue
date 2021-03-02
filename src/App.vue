<script>
import Form from "./components/Form.vue";
import CustomButton from "./components/CustomButton.vue";
export default {
  components: {
    Form,
    CustomButton,
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Form msg="This is a bootstrapped form" />
  <div class="move-down" :style="{ fontSize: (postFontSize += 0.2) }">
    <CustomButton :msg="msg" @enlarge-text="postFontSize += 0.2" />
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
