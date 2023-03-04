<template>
  <div>
    <img
      class="absolute top-0 w-full bg-cover bg-no-repeat bg-center"
      :src="require(`~/assets/images/movie-cover/${image}`)"
    />

    <div class="mt-72 relative">
      <!-- thumbnail image -->
      <div class="absolute top-0 left-32">
        <img
          width="220"
          height="330"
          :src="
            require(`~/assets/images/movie-thumbnail/${movieDetail.movie_thumbnail_url}`)
          "
        />
      </div>
      <!-- title -->
      <div class="pl-96 grid gap-y-1 mb-9 relative">
        <div class="">
          <div class="text-subheader2 font-medium text-white">
            {{ movieDetail.movie_year }}
          </div>
          <div class="text-header2 font-semibold text-cloud">
            {{ movieDetail.movie_title }}
          </div>
          <div class="text-body2 text-white font-medium">
            {{ movieDetail.movie_genres.join(', ') }}
          </div>
        </div>
      </div>
      <!-- rating and etc-->
      <div class="bg-black pl-96 flex space-x-2 items-center w-screen">
        <div class="flex items-center space-x-4">
          <FontIcon :name="'StarIcon'" :color="'#FFB802'" :size="32" />
          <div class="text-header2 font-semibold text-cloud">
            {{ movieDetail.movie_rating }}
          </div>
        </div>
        <div class="flex space-x-16 items-center">
          <div class="grid gap-y-1">
            <div class="text-caption1 font-medium uppercase text-cloud">
              USER SCORE
            </div>
            <div class="text-caption1 font-medium uppercase text-white">
              {{ movieDetail.movie_votes }} VOTES
            </div>
          </div>
          <div class="grid gap-y-1">
            <div class="text-caption1 font-medium uppercase text-cloud">
              STATUS
            </div>
            <div class="text-caption1 font-medium uppercase text-white">
              {{ movieDetail.movie_status }}
            </div>
          </div>
          <div class="grid gap-y-1">
            <div class="text-caption1 font-medium uppercase text-cloud">
              LANGUAGE
            </div>
            <div class="text-caption1 font-medium uppercase text-white">
              {{ movieDetail.movie_language }}
            </div>
          </div>
          <div class="grid gap-y-1">
            <div class="text-caption1 font-medium uppercase text-cloud">
              BUDGET
            </div>
            <div class="text-caption1 font-medium uppercase text-white">
              {{ movieDetail.movie_budget }}
            </div>
          </div>
          <div class="grid gap-y-1">
            <div class="text-caption1 font-medium uppercase text-cloud">
              PRODUCTION
            </div>
            <div class="text-caption1 font-medium uppercase text-white">
              {{ movieDetail.movie_production }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-white pb-14">
        <div class="pl-96 pt-8 grid gap-y-2">
          <div class="text-body2 font-semibold text-red-01">OVERVIEW</div>
          <div class="text-body2 text-black w-[526px]">
            {{ movieDetail.movie_overview }}
          </div>
        </div>
        <div class="mt-20 px-32">
          <div class="text-body2 font-semibold text-red-01">REVIEW</div>
          <div class="grid grid-cols-2 gap-8">
            <ReviewCard
              v-for="(item, index) in movieDetail.movie_reviews"
              :key="index"
              :review="item"
            />
          </div>
        </div>
      </div>
      <div class="mt-12 px-32 grid gap-y-9">
        <div class="text-white font-semibold text-body2 uppercase">
          Recommendation
        </div>
        <div class="grid grid-cols-4 gap-x-5">
          <MovieCard
            v-for="(movie, index) in movieRecommendationList"
            :key="index"
            :movie="movie"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontIcon from '~/components/Elements/Icon/FontIcon.vue'
import ReviewCard from '~/components/Elements/Card/ReviewCard.vue'
import MovieCard from '~/components/Elements/Card/MovieCard.vue'
import { staticFilterMovieDetail, staticFilterMovieList } from '~/utils/movie'
export default Vue.extend({
  name: 'DetailPage',
  components: {
    FontIcon,
    ReviewCard,
    MovieCard,
  },
  data() {
    return {
      image: '1-cover-wonder-woman.png',
      movieDetail: staticFilterMovieDetail({
        slug: this.$route.params.slug || 'wonder-woman-1984',
      }),
      movieRecommendationList: staticFilterMovieList({
        search: '',
        order_by: 'asc',
        sort_by: '',
        pagination: { page: 2, limit: 4 },
      }),
    }
  },
})
</script>

<style></style>
