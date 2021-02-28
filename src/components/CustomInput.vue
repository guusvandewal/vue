<template>
  <CustomInput>
    <label for="name">Name</label>
    <input
      ref="name"
      id="name"
      v-model="name"
      name="name"
      type="text"
      class="form-control"
    />
  </CustomInput>
</template>
