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

    &__list{
      list-style-type: none;
    }

    &__item{
      cursor: pointer;
      text-decoration: none;
      color: white;
    }
  }

  @include breakpoint(large) {
    .nav{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 70px;
      background-color:$color-primary-deep-purple;
      border-radius: 0;

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