<template>
  <div class="grid gap-y-3">
    <!-- image wrapper -->
    <div
      class="relative"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <!-- image thumbnail-->
      <div class="relative">
        <img
          class="w-full"
          :src="
            require(`~/assets/images/movie-thumbnail/${movie.movie_thumbnail_url}`)
          "
        />
        <div
          class="absolute right-0 top-0 py-2 px-3 bg-dark-default/80 text-cloud text-subheader2 font-bold text-center"
        >
          {{ movie.movie_rating }}
        </div>
      </div>
      <!-- hovered content -->
      <div
        v-show="hovered"
        class="absolute top-0 w-full h-full flex flex-col items-center justify-center space-y-12 bg-black/80 text-white"
      >
        <div class="flex items-center space-x-3">
          <FontIcon :name="'StarIcon'" :color="'#FFB802'" :size="32" />
          <span class="text-header5 font-semibold">
            {{ movie.movie_rating }}
          </span>
        </div>
        <div class="text-subheader2 font-semibold">
          {{ movie.movie_genres[0] }}
        </div>
        <NuxtLink
          class="px-8 py-1 text-center rounded-full bg-red-00 text-body2 font-bold uppercase"
          :to="`/detail/${movie.movie_slug}`"
        >
          VIEW
        </NuxtLink>
      </div>
    </div>
    <div class="text-cloud text-body1 font-semibold">
      {{ movie.movie_title }}
    </div>
    <div class="text-dark-grey font-body2">
      {{ movie.movie_year }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontIcon from '../Icon/FontIcon.vue'
import { MovieItem } from '~/types/movie'
export default Vue.extend({
  name: 'MovieCard',
  components: {
    FontIcon,
  },
  props: {
    movie: {
      type: Object,
      default: () =>
        ({
          movie_id: '1',
          movie_title: 'Space Sweepers',
          movie_year: 2021,
          movie_rating: 7.3,
          movie_thumbnail_url: '/1-carousel-space-sweepers.png',
          movie_views: 12400,
          movie_genres: ['Sci-Fi'],
          movie_overview: `When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.`,
        } as MovieItem),
    },
  },
  data() {
    return {
      hovered: false,
    }
  },
})
</script>

<style scoped></style>
