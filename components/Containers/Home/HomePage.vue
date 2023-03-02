<template>
  <div class="relative">
    <CarouselMovie />
    <div class="absolute w-full h-80 bg-white/5" />
    <MovieGrid />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MovieGrid from './MovieGrid.vue'
import CarouselMovie from '~/components/Elements/Carousel/CarouselMovie.vue'
export default Vue.extend({
  name: 'HomePage',
  components: {
    CarouselMovie,
    MovieGrid,
  },
})
</script>

<style scoped></style>
