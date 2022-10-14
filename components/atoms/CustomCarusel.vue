<script setup lang="ts">
  import {CustomVideo} from "~/types/video";
  import {ref} from 'vue';

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

  const props = defineProps<{
    videos: CustomVideo[]
  }>()
  const moc = 0
  const arr = [
    {name: 'one', id: 1},
    {name: 'two', id: 2},
    {name: 'three', id: 3},
    {name: 'four', id: 4},
    {name: 'five', id: 5},
    {name: 'six', id: 6},
    {name: 'seven', id: 7},
  ];

  let offset = 0; //сещение от левго каря
  const track = ref()

  function prev(){
    offset -= 350;
    if (offset < 0){
      offset = 1400;
    }
    track.value.style.left = -offset + 'px';
  }

  function next(){
    offset += 350;
    if (offset > 1400){
      offset = 0;
    }
    track.value.style.left = -offset + 'px';
  }
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__roundabout">
      <div class="wrapper__track" ref="track">
        <div class="wrapper__card" v-for="item in arr" :key="item.id">
          {{item.name}}
        </div>
      </div>
    </div>
    <button @click="prev()" class="wrapper__arrow-left">Prev</button>
    <button @click="next()" class="wrapper__arrow-right">Next</button>
  </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 900px;
    background-color: #abc2f2;

    &__roundabout{
      width: 80%;
      height: 760px;
      display: flex;
      justify-content: flex-start;
      background-color: #330a5b;
      overflow: hidden;
    }

    &__track{
      display: flex;
      flex-direction: column;
    }

    &__card{
      display: flex;
      //margin: 10px 0;
      width: 250px;
      min-height: 380px;
      background-color: aqua;
    }

    &__arrow-left,
    &__arrow-right {
      display: none;
    }
  }

  @include breakpoint(large) {
    .wrapper{
      height: 600px;

      &__roundabout{
        width: 1050px;
        height: 473px;
        border: 2px solid #f61212;

        & button{
          cursor: pointer;
        }
      }
      &__track{
        position: relative;
        height: 100%;
        width: 2450px;
        flex-direction: row;
        left: 0;
        transition: all ease 1s;
      }
      &__card{
        justify-content: center;
        align-items: center;
        //margin: 0 10px;
        min-width: 350px;
        height: 473px;
        outline: 2px solid green;
      }

      &__arrow-left{
        display: block;
        position: absolute;
        left:15%;
        width: 40px;
        height: 60px;
        border: 1px solid #FFFFFF;
        border-radius: 10px 0px;
      }

      &__arrow-right{
        display: block;
        position: absolute;
        right: 14%;
        width: 40px;
        height: 60px;
        border: 1px solid #FFFFFF;
        border-radius: 10px 0px;
      }
    }
  }
</style>