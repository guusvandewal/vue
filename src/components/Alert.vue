<template>
  <div class="demo-alert-box alert alert-danger">
    <strong>Error!</strong><br />
    <slot></slot>
  </div>
</template>

<style scoped>
.alert {
  margin-top: 24px;
}
</style>
