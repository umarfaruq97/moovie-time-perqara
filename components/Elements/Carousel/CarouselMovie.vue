<template>
  <div class="w-full bg-black/30 py-14 border border-white">
    <hooper>
      <slide v-for="(item, i) in slides" :key="i"></slide>
    </hooper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
export default Vue.extend({
  name: 'CarouselMovie',
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      slides: [],
      settings: {
        itemsToShow: 1.6895,
        infiniteScroll: true,
        centerMode: true,
        // untuk memberikan kendali penuh pada navigation custom yang saya buat, maka props yang terkait dengan navigasi menggunakan mouse dan keyboard di disable (set false)
        mouseDrag: true,
        touchDrag: false,
        wheelControl: false,
        keysControl: false,
        shortDrag: false,
        autoPlay: true,
        playSpeed: 5000,
        transition: 700,
        hoverPause: false,
      },
    }
  },
})
</script>

<style scoped></style>
