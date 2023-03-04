<template>
  <div class="relative">
    <!-- input -->
    <div class="px-3 py-1 flex items-center space-x-4 bg-[#1A1E24] rounded-md">
      <div class="opacity-30 flex-none">
        <FontIcon :name="'MovieIcon'" :size="18" :color="'#FFF'" />
      </div>
      <div class="grow">
        <input
          v-model="search"
          class="text-body1 text-cloud w-full bg-inherit focus:outline-none"
          @focus="showResult = true"
        />
      </div>
      <div class="flex none">
        <FontIcon :name="'SearchIcon'" :size="18" :color="'#FFF'" />
      </div>
    </div>
    <!-- dropdown result-->
    <div
      v-show="showResult"
      class="absolute bg-[#1A1E24] rounded-md p-5 text-cloud w-full top-8 shadow-2xl"
    >
      <div
        v-for="(item, index) in movieList"
        :key="index"
        class="cursor-pointer hover:font-bold"
        @click="handleDetail($event, item)"
      >
        {{ item.movie_title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontIcon from '~/components/Elements/Icon/FontIcon.vue'
import { MovieItem } from '~/types/movie'
import { staticFilterMovieList } from '~/utils/movie'
export default Vue.extend({
  name: 'AutoCompleteSearch',
  components: {
    FontIcon,
  },
  data() {
    return {
      search: '',
      showResult: false,
      movieList: [] as MovieItem[],
    }
  },
  watch: {
    search(newValue: string) {
      if (newValue.length > 0) {
        this.getList(newValue)
        this.showResult = true
      }
    },
  },

  mounted() {
    const self = this
    window.addEventListener('click', function (e: MouseEvent) {
      // close dropdown when clicked outside
      e.stopPropagation()
      if (!self.$el.contains(e.target as any)) {
        self.showResult = false
      }
    })
  },
  methods: {
    getList(search: string) {
      this.movieList = staticFilterMovieList({
        search,
        order_by: 'asc',
        sort_by: '',
        pagination: { page: 1, limit: 6 },
      })
    },
    handleDetail(e: any, item: MovieItem) {
      e.stopPropagation()
      this.$router.push(`/detail/${item.movie_slug}`)
    },
  },
})
</script>

<style scoped></style>
