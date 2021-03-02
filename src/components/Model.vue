<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
<script>
export default {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
  },
  data: function () {
    return {
      ////
    };
  },
  emits: ["update:modelValue"],
  methods: {
    emitValue(e) {
      // Trim is also a v-model option
      //let value = e.target.value.trim();
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        let splitString = value.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:modelValue", value);
    },
  },
  created() {
    console.log(this.modelModifiers); // { capitalize: true }
  },
};
</script>
