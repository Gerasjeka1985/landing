<script setup lang="ts">
  const image = '../assets/images/photo.webp';
</script>

<template>
  <div class="image">
      <h1 class="image__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, perspiciatis? Quos.</h1>
      <img :src="image" alt="Ola" />
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';
  .image{
    position: relative;
    width: 100%;
    height: 900px;
    box-shadow: 0px -5px 10px 0px rgb(0 0 0);

    &__title{
     display: none;
    }

    & img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @include breakpoint(large) {
    .image{
      background: #858585;

      &__title{
        display: block;
        position: absolute;
        left: 100px;
        top: 260px;
        width: 40%;
        height: 40%;
        font-family: 'Vampiro One',sans-serif;
        color: $color-primary-gray;
      }

      & img{
        object-fit: contain;
      }
    }
  }
</style>