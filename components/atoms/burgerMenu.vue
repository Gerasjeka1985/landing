<script setup lang="ts">
import { onMounted, ref} from "vue";
  const links = [
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
  const isVisible = ref(false); //для блока burger-menu__nav
  const isActive = ref(false); //для смены класса burger-menu__button

  // function checkSizeScreen(){
  //   window.addEventListener("resize", () =>{
  //     if(window.innerWidth >= 1200){
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }
  //   })
  // }

  const handler = (e:Event) => {
    isActive.value = !isActive.value;
    isVisible.value = !isVisible.value;
  }

   onMounted(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth >= 1200){
        isVisible.value = true;
      }
      else{
        isVisible.value = false;
      }
    })
  });

</script>

<template>
 <div class="burger-menu">
   <nuxt-link
       @click="handler"
       class="burger-menu__button"
       v-bind:class="{active: isActive }"
   >
     <span class="burger-menu__lines"></span>
   </nuxt-link>
 </div>
  <div class="burger-menu__nav"
       v-bind:class="{visible: isVisible}"
  >
    <ul class="burger-menu__list">
      <nuxt-link
          class="burger-menu__item"
          :to="item.link"
          v-for="item in links"
          :key="item.id"
      >
        <li >
          {{item.name}}
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  // class to toggle burger-menu
    .active span::before{
      transform: rotate(45deg);
    }

    .active span{
      height: 0;
    }

    .active span::after{
      transform: rotate(-45deg);
    }

  .visible{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 250px;
    background-color: #2f1949;
    border-radius: 0 10px 10px 0;
  }
  //-------------------------->

  .burger-menu{

    &__nav{
      display: none;
    }

    &__list{
      list-style-type: none;
    }

    &__item{
      cursor: pointer;
      text-decoration: none;
      color: white;
    }

    &__button{
      position: fixed;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: black;
    }

    &__lines,
    &__lines::before,
    &__lines::after {
      z-index: 30;
      position: absolute;
      top: 50%;  margin-top: -1px;
      left: 50%; margin-left: -15px;
      width: 30px;
      height: 3px;
      background-color: #ffffff;
      transition: 0.2s;
    }

    &__lines::before,
    &__lines::after{
      content: "";
    }

    &__lines::before{
      transform: translateY(-10px);
    }

    &__lines::after{
      transform: translateY(8px);
    }
  }

  @include breakpoint(large) {
    .burger-menu{

      &__nav{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70px;
        background-color: #2f1949;
        border-radius: 0;
      }

      &__list{
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      &__item{
        cursor: pointer;
        margin-left: 56px;
      }

      &__button{
        display: none;
      }
    }
  }
</style>