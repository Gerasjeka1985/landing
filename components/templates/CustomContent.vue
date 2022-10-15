<script setup lang="ts">
  import CustomCarusel from "~/components/moleculas/CustomCarusel.vue";
  import AboutMe from "~/components/atoms/aboutMe.vue";

  const title = 'Metal Blondy';
</script>

<template>
  <div class="content">
      <custom-carusel />
      <about-me :title="title" />
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';



@include breakpoint(large) {}

</style>