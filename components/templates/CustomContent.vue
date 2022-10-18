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
.content{
  width: 100%;
  min-height: 500px;
}


@include breakpoint(large) {}
.content {width: 100%;}
</style>