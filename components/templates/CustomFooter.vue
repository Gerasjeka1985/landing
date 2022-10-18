<script setup lang="ts">
  const title = 'Metal Blondy';
  const name = "Olga Gerasimova";
  const email = "gekgrom@mail.ru";
  const listImg = [
    {
      id: 1,
      img: "../assets/images/social.svg"
    },
    {
      id: 2,
      img: "../assets/images/insta.svg"
    },
    {
      id: 3,
      img: "../assets/images/bird.svg"
    }
  ];
  const logo = "../assets/images/logo.svg";
</script>

<template>
  <div class="footer">
    <div class="footer__top">
      <div class="footer__logo">
        <img :src="logo" alt="logo" />
      </div>
      <div class="footer__title">
        <h3>
          {{title}}
        </h3>
      </div>
    </div>
    <div class="footer__mid">
      <h3>ARTIST NAME : {{name}}</h3>
      <h3>EMAIL ADDRESS : {{email}}</h3>
    </div>
    <div class="footer__bottom">
      <ul class="footer__list">
        <li class="footer__item" v-for="item in listImg" :key="item.id">
          <img :src="item.img" alt="icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 600px;
    background-color: $color-primary-deep-purple;
    color: $color-primary-gray;

    &__title{font-family: 'Vampiro One',sans-serif;}

    &__top{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
    }

    &__mid h3{margin: 10px 0;}

    &__bottom{margin-top: 20px;}

    &__list{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &__item{
      list-style-type: none;
      margin: 10px 0;
    }
  }

  @include breakpoint(large) {
    .footer{
      width: 100%;
      background-color: $color-primary-deep-purple;
      color: $color-primary-gray;

      &__top{
        justify-content: space-between;
        width: 12%;
      }

      &__list {flex-direction: row;}

      &__item {margin: 0 10px;}
    }
  }
</style>