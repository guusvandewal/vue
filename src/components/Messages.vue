<template>
  <HelloWorld msg="Hello"></HelloWorld>
  <HelloWorld msg="Hi"></HelloWorld>
  <teleport to="#modal" :disabled='!showText'>
    <HelloWorld msg="Goodbye"></HelloWorld>
  </teleport>
  <div>
    This should be at the top.
  </div>
  <button @click="showText = !showText">
    Toggle showText
  </button>
</template>

<script setup>
import HelloWorld from "./HelloWorld.vue";
</script>
<script>
  export default {
    data() {
      return {
        showText: false
      };
    }
  };
</script>