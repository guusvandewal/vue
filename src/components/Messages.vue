<template>
  <HelloWorld msg="Hello"></HelloWorld>
  <HelloWorld msg="Hi"></HelloWorld>
  <teleport to="#modal">
    <HelloWorld msg="Goodbye"></HelloWorld>
  </teleport>
</template>

<script setup>
import HelloWorld from "./HelloWorld.vue";
</script>