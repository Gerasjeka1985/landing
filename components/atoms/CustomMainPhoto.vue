<script setup lang="ts">
  const image = '../assets/images/photo.jpg';
</script>

<template>
  <div class="image">
    <div class="image__shadow"></div>
      <img :src="image" alt="Ola" />
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';
  .image{
    width: 100%;
    height: 1000px;

    &__shadow{
      position: absolute;
      top: 0;
      z-index: 12;
      width: 100%;
      height: 1100px;
      background-color: #330a5b;
      opacity: 0.3;
    }

    & img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @include breakpoint(large) {

  }
</style>