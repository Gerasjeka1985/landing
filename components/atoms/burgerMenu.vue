<script setup lang="ts">
  import { onMounted, ref} from "vue";

  const isActive = ref(false); //для смены класса burger-menu__button

  const handler = () => {
    isActive.value = !isActive.value;
  }

  //onMounted отслеживает,если mobile version => isActive = false для вида бургера
   onMounted(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth < 1200){
        isActive.value = false;
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
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  // class to toggle burger-menu
    .active span::before {transform: rotate(45deg);}

    .active span {height: 0;}

    .active span::after {transform: rotate(-45deg);}
  //-------------------------->

  .burger-menu{

    &__button{
      position: fixed;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(0,0,0,0);
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
      background-color: $color-primary-gray;
      transition: 0.2s;
    }

    &__lines::before,
    &__lines::after{
      content: "";
    }

    &__lines::before {transform: translateY(-10px);}

    &__lines::after {transform: translateY(8px);}
  }

  @include breakpoint(large) {
    .burger-menu{

      &__button {display: none;}
    }
  }
</style>