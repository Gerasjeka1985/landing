<script setup lang="ts">
  import BurgerMenu from "~/components/atoms/burgerMenu.vue";
  import CustomNav from "~/components/atoms/CustomNav.vue";
  import {CustomNavLinks} from "~/types/links";
  import {ref} from 'vue';

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
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

//style for nav visible by btn click
.visible{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 250px;
  background-color: #2f1949;
  border-radius: 0 10px 10px 0;
}

//----------------------------------
  .header{
    width: 100%;
    min-height: 100vh;
    background: url('@/assets/images/photo.jpg');
    position: relative;

    &__title{
      display: none;
    }
  }

@include breakpoint(large) {
  .header{
    background: url('@/assets/images/photo.jpg') top 15% right;

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