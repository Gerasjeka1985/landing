<script setup lang="ts">

</script>

<template>
  <buttn class="btn">
    <slot></slot>
  </buttn>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .btn{
    color: #e0e2eb;
    cursor: pointer;
  }
</style>