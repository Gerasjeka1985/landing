<script setup lang="ts">
  import {CustomNavLinks} from "~/types/links";

  const props = defineProps<{
    links: CustomNavLinks
  }>()
</script>

<template>
  <div class="nav">
      <ul class="nav__list">
        <nuxt-link
            class="nav__item"
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

  .nav{
    display: none;

    &__list {list-style-type: none;}

    &__item{
      cursor: pointer;
      text-decoration: none;
      color: $color-primary-white;
      transition: 0.5s ease;

      &:hover{
        box-shadow: inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
        color: $color-primary-deep-purple;
        background-color: $color-primary-gray;
        border-radius: 10px;
        padding: 5px;
      }
    }
  }

  @include breakpoint(large) {
    .nav{
      z-index: 12;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 70px;
      border-radius: 0;
      background-color:$color-primary-deep-purple;

      &__list{
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      &__item{
        cursor: pointer;
        margin-left: 56px;
      }
    }
  }
</style>