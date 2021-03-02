<template>
  <input v-model="value"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {},
  /*computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },*/

};
</script>

<style scoped></style>
