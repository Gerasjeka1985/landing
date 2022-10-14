<script setup lang="ts">
  const image = '../assets/images/photo.jpg';
</script>

<template>
  <div class="image">
    <img :src="image" alt="Ola" />
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';
  .image{
    width: 100%;

    & img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @include breakpoint(large) {

  }
</style>