<script setup lang="ts">
  import BurgerMenu from "~/components/atoms/burgerMenu.vue";

  const title = 'Metal Blondy';
</script>

<template>
  <div class="nav">
    <h1 class="nav__title">
      {{title}}
    </h1>
    <burger-menu />
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .nav{
    width: 100%;
    min-height: 100vh;
    background: url('@/assets/images/photo.jpg');
    position: relative;

    &__title{
      display: none;
    }
  }

@include breakpoint(large) {
  .nav{
    background: url('@/assets/images/photo.jpg') top 15% right;

    &__title{
      display: block;
      position: absolute;
      top: 15px;
      left: 120px;
      font-family: 'Vampiro One';
      color: white;
    }
  }
}
</style>