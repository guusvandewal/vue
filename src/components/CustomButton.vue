<template>
  <button v-on:click='count++' v-bind='msg' v-on:dblclick='count--'>{{ msg }} {{count}}</button>
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
    }
  },
  methods: {
    countUp() {
       return 1
    },
  },
};
</script>

<style scoped>

</style>



