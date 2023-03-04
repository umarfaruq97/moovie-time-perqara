<template>
  <div class="w-4/5 mx-auto pt-14">
    <div class="w-32 h-[6px] bg-dark-orange mb-3" />
    <div class="text-cloud text-[36px] font-semibold mb-14">Movies</div>
    <div class="flex space-x-8">
      <!-- left side checkbox -->
      <div class="w-1/5 checkbox-wrapper rounded-lg px-4 py-5 h-max">
        <div class="text-white text-body1 font-semibold mb-10">
          Sort Result By
        </div>
        <SortingDropdown />
        <div class="text-white text-body1 font-semibold my-9">Genres</div>
        <template v-for="(cat, index) in categories">
          <div
            :key="index"
            class="flex items-center justify-between text-white text-body2"
            @click="togglerCategory(cat)"
          >
            <span>{{ cat }}</span>
            <input
              type="checkbox"
              :value="cat"
              :checked="selectedCategories.includes(cat)"
              class="accent-red-500"
            />
          </div>
        </template>
      </div>
      <div class="w-4/5 grid grid-cols-4 grid-rows-3 gap-y-9 gap-x-6">
        <MovieCard
          v-for="(movie, i) in movieListStatic.data"
          :key="i"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import MovieCard from '~/components/Elements/Card/MovieCard.vue'
import { categories, movieList } from '~/utils/movie'
import SortingDropdown from '~/components/Elements/Dropdown/SortingDropdown.vue'
import { MovieItem, MovieListRequest } from '~/types/movie'
import { APIStateType } from '~/types/fetching-api'
export default Vue.extend({
  name: 'BrowsePage',
  components: {
    MovieCard,
    SortingDropdown,
  },
  data() {
    return {
      categories: [...categories],
      selectedCategories: this.$route.query?.genres
        ? [this.$route.query?.genres]
        : ([] as string[]),
      payload: {
        search: '',
        pagination: { page: 1, limit: 12 },
        sort_by: '',
        order_by: 'asc',
      } as MovieListRequest,
      movieListStatic: {
        data: [...movieList],
        isLoading: false,
        status: 'SUCCESS',
      } as APIStateType<MovieItem[]>,
    }
  },
  computed: {
    ...mapGetters('movie', ['movieList']),
  },
  watch: {
    $route: {
      handler(val: any) {
        if (val.query?.genres) {
          this.selectedCategories = [val.query?.genres]
        }
      },
    },
  },
  async created() {
    await this.getMovieList(this.payload)
  },
  methods: {
    ...mapActions('movie', ['getMovieList']),
    togglerCategory(category: string) {
      if (this.selectedCategories.includes(category)) {
        const index: number = this.selectedCategories.indexOf(category)
        if (index !== -1) {
          this.selectedCategories.splice(index, 1)
        }
      } else {
        this.selectedCategories.push(category)
      }
    },
  },
})
</script>

<style lang="scss">
.checkbox-wrapper {
  background: linear-gradient(180deg, #0e1723 0%, rgba(30, 35, 42, 0) 100%);
}
</style>
