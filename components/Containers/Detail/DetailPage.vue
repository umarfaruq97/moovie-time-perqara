<template>
  <div>
    <img
      class="absolute top-0 w-full bg-cover bg-no-repeat bg-center"
      :src="require(`~/assets/images/movie-cover/${image}`)"
    />
    <div class="mt-72 px-32 flex space-x-8">
      <img
        width="220"
        height="330"
        :src="
          require(`~/assets/images/movie-thumbnail/${movieDetail.movie_thumbnail_url}`)
        "
      />
      <div class="flex justify-between flex-col">
        <!-- title -->
        <div class="grid gap-y-1">
          <div class="text-subheader2 font-medium text-white">
            {{ movieDetail.movie_year }}
          </div>
          <div class="text-[36px] font-semibold text-cloud">
            {{ movieDetail.movie_title }}
          </div>
          <div class="text-body2 text-white font-medium">
            {{ movieDetail.movie_genres.join(', ') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { staticFilterMovieDetail } from '~/utils/movie'
export default Vue.extend({
  name: 'DetailPage',
  data() {
    return {
      image: '1-cover-wonder-woman.png',
      movieDetail: staticFilterMovieDetail({
        slug: this.$route.params.slug || 'wonder-woman-1984',
      }),
    }
  },
})
</script>

<style></style>
