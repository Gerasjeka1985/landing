<script setup lang="ts">
  import CustomMainPhoto from "~/components/atoms/CustomMainPhoto.vue";
  import BurgerMenu from "~/components/atoms/burgerMenu.vue";
  import CustomNav from "~/components/atoms/CustomNav.vue";
  import {CustomNavLinks} from "~/types/links";
  import {CustomVideo} from "~/types/video";
  import {ref} from 'vue';
  import CustomCarusel from "~/components/atoms/CustomCarusel.vue";


  const videos: CustomVideo[] = [
    {
      id: 1,
      name:"../assets/video/first.mp4",
      title:'My video 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugit impedit libero!',
      data:'01.01.2001'
    },
    {
      id: 2,
      name:"../assets/video/first.mp4",
      title:'My video 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugit impedit libero!',
      data:'01.02.2001'
    },
    {
      id: 3,
      name:"../assets/video/first.mp4",
      title:'My video 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugit impedit libero!',
      data:'01.04.2001'
    },
    {
      id: 4,
      name:"../assets/video/first.mp4",
      title:'My video 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugit impedit libero!',
      data:'01.04.2001'
    },
    {
      id: 5,
      name:"../assets/video/first.mp4",
      title:'My video 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugit impedit libero!',
      data:'01.04.2001'
    }
  ];

  const isVisible = ref(false);

  const title = 'Metal Blondy';

  const links: CustomNavLinks[] = [
    {
      name: "About",
      link:"/about",
      id: 1
    },
    {
      name: 'My music',
      link: "/music",
      id: 2
    },
    {
      name: 'Contacts',
      link: "/contacts",
      id: 3
    },
    {
      name: 'Main',
      link: "/",
      id: 4
    }
  ];

  const visibleHandler = () => {
    isVisible.value = !isVisible.value
  }

  //данный onMounted отменяет все клики по кнопке бургера при width > 1200
   onMounted(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth >= 1200){
        isVisible.value = false;
      }
    })
  });

</script>

<template>
  <div class="header">
      <h1 class="header__title">
        {{title}}
      </h1>
      <custom-nav :links="links" class="header__nav" v-bind:class="{'visible' : isVisible}" />
      <burger-menu  @click="visibleHandler" class="header__burger" />
      <custom-main-photo class="header__photo" />
      <custom-carusel :video="videos" />
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  //style for nav visible by btn click
  .visible{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 250px;
    background-color: #18042c;
    border-radius: 0 10px 10px 0;
  }

  //----------------------------------
  .header{
    width: 100%;
    min-height: 100vh;
    position: relative;

    &__title{
      display: none;
    }
  }

@include breakpoint(large) {
  .header{
    height: 70px;

    &__title{
      display: block;
      position: absolute;
      top: 15px;
      left: 120px;
      font-family: 'Vampiro One';
      color: white;
    }

    &__nav{
      width: 100%;
      height: 70px;
    }

    &__burger{
      display: none;
    }
  }
}
</style>