<script setup lang="ts">
  import CustomVideoCard from "~/components/atoms/CustomVideoCard.vue";
  import CustomButton from "~/components/atoms/CustomButton.vue";
  import {CustomVideo} from "~/types/video";

  const props = defineProps<{
    video: CustomVideo[]
  }>()

  function prevVideo(){
    console.log(props.video[2]);
  }

  function nextVideo(){
    console.log("next");
  }
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__carusel">
      <custom-video-card  class="wrapper__item" :video="video"/>
    </div>
    <custom-button @click.prevent="prevVideo" class="wrapper__left-btn">Prev</custom-button>
    <custom-button @click.prevent="nextVideo" class="wrapper__right-btn">Next</custom-button>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .wrapper{
    width: 100%;
    min-height: 900px;
    background-color: $color-primary-deep-purple;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__left-btn{
      display: none;
    }

    &__right-btn{
      display: none;
    }
  }

@include breakpoint(large) {
  .wrapper{
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__carusel{
      position: relative;
      width: 1110px;
      height: 500px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      overflow: hidden;
    }

    &__left-btn{
      display: block;
      position: absolute;
      left: 15%;
      width: 40px;
      height: 60px;
      border: 1px solid #FFFFFF;
      border-radius: 10px 0px;
    }

    &__right-btn{
      display: block;
      position: absolute;
      right: 14%;
      width: 40px;
      height: 60px;
      border: 1px solid #FFFFFF;
      border-radius: 10px 0px;
    }
  }
}
</style>