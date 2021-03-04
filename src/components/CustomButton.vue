<template>
  <button
    @click="$emit('enlargeText', 0.1)"
    v-on:click="count++"
    v-on:dblclick="count--"
    class="btn btn-outline-danger"
  >
    {{ msg }}{{ title }} {{ count }} {{ user }}
  </button>
</template>

<script>
export default {
  created() {
    console.log(`Injected property: ${this.user}`) // > Injected property: 5
  },
  mounted() {
    console.log("Component has been mounted!");
  },
  data: function () {
    return {
      count: 0,
    };
  },
  props: {
    title: String,
    msg: String,
    btnFontSize: Number,
    callback: Function,
  },
  emits: ["enlargeText"],
  methods: {
    countUp() {
      return 1;
    },
  },
  inject: ['user'],
};
</script>

<style scoped>
button {
  margin-left: 2px;
  font-size: inherit;
}
</style>
