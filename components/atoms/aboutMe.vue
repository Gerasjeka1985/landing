<script setup lang="ts">
  const props = defineProps<{
    title:string
  }>()
  const description = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur enim error illo nihil sint? Ab consequuntur laboriosam nisi nulla perferendis sed tempore voluptatem! Accusantium at atque, consectetur cumque enim expedita fugiat ipsa laudantium maxime omnis praesentium repellendus, sed sit voluptas voluptates? Aliquid aperiam autem, blanditiis distinctio dolore doloremque dolores, eaque eligendi eos illo inventore ipsa labore laboriosam laudantium magni maiores minima nobis odio quae quos ratione reprehenderit suscipit totam ut vel voluptatem voluptates! Accusantium aperiam asperiores corporis cumque debitis deserunt eos error est facere facilis id impedit incidunt, inventore ipsam itaque laudantium magnam minus molestiae mollitia nam neque nihil numquam odio omnis porro quo reprehenderit rerum saepe sapiente tenetur. Minus.";
  const list = [
    {
      name: "Based in Moscow"
    },
    {
      name: "Bla-bla-bla"
    },
    {
      name: "Founded 2017"
    },
    {
      name: "prefer style MetalCore"
    }
  ];
  const picture = "https://sun9-4.userapi.com/impg/SPYot4iVtpWJgpjcpJGI3OYAiy3WXRlQLv2HLQ/FoZQDlDuOFs.jpg?size=1600x918&quality=96&sign=5068bd514f8ed6a521d4503ae5ee96f0&type=album";
</script>

<template>
  <div class="container">
    <div class="container__content">
      <h2 class="container__title">{{title}}</h2>
      <p class="container__description">
          {{description}}
      </p>
      <div class="container__list">
        <div class="container__item" v-for="item in list">
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="container__photo">
      <img :src="picture" alt="icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .container{
    width: 100%;
    min-height: 100px;
    background-color: $color-primary-deep-purple;
    color: $color-primary-gray;

    &__content{width: 100%}

    &__title{
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Vampiro One', sans-serif;
    }

    &__description {text-align: center;}

    &__list{
      width: 100%;
      min-height: 200px;
    }

    &__item {margin: 15px 40px;}

    &__item::before{
      content:'';
      position: absolute;
      left: 0;
      width: 30px;
      height: 30px;
      background: $color-primary-buttons;
      border-radius: 10px 0;
    }

    &__photo {display: none;}
  }

  @include breakpoint(large) {
    .container{
      position: relative;
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;

      &__content{
        width: 40%;
        height: 500px;
      }

      &__description{
        padding: 10px;
        font-size: 16px;
      }

      &__photo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 38%;

        & img{
          width: 530px;
          height: 400px;
          border-radius: 30px 0;
          object-fit: cover;
        }
      }

      &__list {left: 233px;}

      &__item::before {left:191px;}
    }
  }
</style>