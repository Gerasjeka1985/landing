<script setup lang="ts">
  const props = defineProps<{
    title:string
  }>()

  const description =
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "        A architecto asperiores aut dolore dolorem doloribus eum\n" +
      "        harum iusto molestias natus, odit placeat sint sit soluta voluptatibus?\n" +
      "        Consectetur cupiditate deserunt dolor expedita ipsa qui recusandae\n" +
      "        repellendus reprehenderit rerum ullam. Ea fuga, fugit! Animi aut\n" +
      "        dicta esse fuga quos repellat sed tempore voluptates voluptatibus? Adipisci alias\n" +
      "        aperiam aspernatur assumenda at aut consectetur cumque deleniti dolore ea eligendi\n" +
      "        est eveniet ex excepturi fuga fugiat harum hic id, illo incidunt inventore ipsam,\n" +
      "        iusto nobis non nulla officia omnis placeat quidem quis quod quos reiciendis\n" +
      "        sapiente sint temporibus totam voluptas, voluptate. Est illo ipsa reprehenderit soluta."

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
      <img src="https://sun9-4.userapi.com/impg/SPYot4iVtpWJgpjcpJGI3OYAiy3WXRlQLv2HLQ/FoZQDlDuOFs.jpg?size=1600x918&quality=96&sign=5068bd514f8ed6a521d4503ae5ee96f0&type=album" alt="icon" />
    </div>

  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';
  .container{
    width: 100%;
    height: 520px;
    background-color: $color-primary-deep-purple;
    color: $color-primary-gray;

    &__title{
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Vampiro One'
    }

    &__photo{
      display: none;
    }
  }

  @include breakpoint(large) {
    .container{
      position: relative;
      width: 100%;
      height: 600px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;

      &__content{
        width: 40%;
        height: 500px;
        //outline: 1px solid #c22a2a;
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
        height: 500px;
        //outline: 1px solid #4555c0;

        & img{
          width: 530px;
          height: 400px;
          border-radius: 30px 0;
          object-fit: cover;
        }
      }

      &__list{
        position: absolute;
        left: 247px;
      }

      &__item{
        margin: 15px 0;
      }

      &__item::before{
        content:'';
        position: absolute;
        left:-43px;
        width: 30px;
        height: 30px;
        background: #7A66CC;
        border-radius: 10px 0;
      }
    }
  }
</style>