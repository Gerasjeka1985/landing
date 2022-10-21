<script setup lang="ts">
  const gallary = [
    {
      id: 1,
      img: "../assets/images/gallary/img1.webp"
    },
    {
      id: 1,
      img: "../assets/images/gallary/img2.webp"
    },
    {
      id: 1,
      img: "../assets/images/gallary/img3.webp"
    },
    {
      id: 1,
      img: "../assets/images/gallary/img4.webp"
    },
    {
      id: 1,
      img: "../assets/images/gallary/img5.webp"
    },
  ];
</script>

<template>
  <div class="gallery">
    <ul class="gallery__list">
      <li class="gallery__item" v-for="item in gallary" :key="item.id">
        <img :src="item.img" alt="icon" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

@import 'assets/scss/_global.scss';
  .gallery{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 700px;
    background-color: $color-primary-deep-purple;

    &__list{
      display: flex;
      width: 100%;
      min-height: 700px;
      margin: 20px 0;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    }

    &__item{
      width: 250px;
      height: 350px;
      margin: 20px 0;
      list-style-type: none;

      & img{
        width: 100%;
        height: 100%;
        border-radius: 30px 0;
        box-shadow: 0px -5px 10px 0px rgb(0 0 0);
      }
    }
  }

@include breakpoint(large) {
  .gallery{
    &__list{
      width: 70%;
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
}
</style>