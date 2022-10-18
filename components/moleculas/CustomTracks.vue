<script setup lang="ts">
  const tracks = [
    {
      id: 1,
      item: "../assets/music/track1.mp3"
    },
    {
      id: 2,
      item: "../assets/music/track2.mp3"
    },
    {
      id: 3,
      item: "../assets/music/track3.mp3"
    },
    {
      id: 4,
      item: "../assets/music/track4.mp3"
    },
    {
      id: 5,
      item: "../assets/music/track5.mp3"
    }
  ];
  const picture = "../assets/images/photo3.jpg";
</script>

<template>
  <div class="tracks">
    <div class="tracks__photo">
      <img :src="picture" alt="icon" />
    </div>
    <div class="tracks__music">
      <h2 class="tracks__title">My favorite songs</h2>
      <ul class="tracks__list">
        <li class="tracks__item" v-for="track in tracks" :key="track.id">
          <audio controls :src="track.item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">

@import 'assets/scss/_global.scss';
  .tracks{
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: $color-primary-deep-purple;
    color: $color-primary-gray;

    &__photo{
     display: none;
    }

    &__title{
      text-align: center;
      font-family: 'Vampiro One',sans-serif;
      margin: 30px 0;
    }

    &__item{
      list-style-type: none;
      margin: 10px 0;

      & audio{height: 25px;}
    }
  }

@include breakpoint(large) {
  .tracks{
    flex-direction: row;
    height: 500px;

    &__photo{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 400px;
      border-radius: 50%;

      & img{
        width: 100%;
        height: 90%;
        border-radius: 50%;
      }
    }
  }
}
</style>