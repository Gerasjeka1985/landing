<script setup lang="ts">
  import {CustomVideo} from "~/types/video";

  const props = defineProps<{
    videos: CustomVideo[]
  }>()

</script>

<template>
  <div class="card" v-for="item in videos" :key="item.id">
      <div class="card__video">
          <video controls :src="item.name"></video>
      </div>
      <div class="card__description">
          <h2 class="card__title">{{ item.title }}</h2>
          <p class="card__text">{{ item.text }}</p>
          <div class="card__data">
              <h4>
                  {{ item.data }}
              </h4>
          </div>
      </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';
  .card{
    border-radius: 30px 0;
    background: $color-primary-card-background;
    color: $color-primary-white;
    margin-top: 10px;
    min-height: 380px;
    width: 250px;

    &__video{
      width: 100%;

      & video{
        width: 100%;
        border-radius: 30px 0 30px 0;
      }
    }

    &__description{
      width: 80%;
      height: 200px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }

@include breakpoint(large) {
  .card{
    margin-right: 10px;
    margin-top: 0;
    width: 350px;
    height: 473px;
    background: #2F2B2B;
    border-radius: 30px 0;
  }
}
</style>