<template>
  <button @click="$emit('enlargeText', 0.1)" v-on:dblclick='count--'>{{ msg }}{{title}} {{count}}</button>
</template>

<script>
export default {
  created() {
    console.log("Component has been created!");
  },
  mounted() {
    console.log("Component has been mounted!");
  },
  data: function () {
    return {
      count: 0,
      postFontSize: 1,

    }
  },
  props: ['title', 'msg', 'btnFontSize'],
  emits: ['enlargeText'],
  methods: {
    countUp() {
       return 1
    },
  },
};
</script>

<style scoped>
  button {
    margin-left: 2px;
    border:1px solid #CCC;
  }
</style>



