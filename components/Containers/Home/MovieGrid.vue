<template>
  <div class="w-4/5 mx-auto pt-20">
    <div class="w-32 h-[6px] bg-dark-orange mb-3" />
    <div class="flex items-center justify-between mb-12">
      <div class="text-header5 text-cloud font-semibold">Discover Movies</div>
      <div class="flex items-center space-x-4">
        <div
          v-for="(item, i) in filter"
          :key="i"
          :class="`py-1 px-2 text-body2 text-white rounded-full font-semibold ${
            item.uuid === filterActive.uuid ? 'bg-red-00' : 'bg-black/20'
          }`"
        >
          {{ item.keterangan }}
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 grid-rows-3 gap-y-9 gap-x-6">
      <MovieCard v-for="(movie, i) in movieList.data" :key="i" :movie="movie" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import MovieCard from '~/components/Elements/Card/MovieCard.vue'
import { MovieListRequest } from '~/types/movie'
export default Vue.extend({
  name: 'MovieGrid',
  components: {
    MovieCard,
  },
  data() {
    return {
      filter: [
        {
          uuid: 'movie_views',
          keterangan: 'Popularity',
        },
        {
          uuid: 'movie_release_date',
          keterangan: 'Release Date',
        },
      ],
      filterActive: {
        uuid: 'movie_views',
        keterangan: 'Popularity',
      },
      payload: {
        search: '',
        pagination: { page: 1, limit: 8 },
        sort_by: '',
        order_by: 'asc',
      } as MovieListRequest,
    }
  },
  computed: {
    ...mapGetters('movie', ['movieList']),
  },
  async created() {
    await this.getMovieList(this.payload)
  },
  methods: {
    ...mapActions('movie', ['getMovieList']),
  },
})
</script>

<style scoped></style>
