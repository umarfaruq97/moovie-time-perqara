<template>
  <div class="w-full bg-transparent py-14 mb-12">
    <hooper :settings="settings">
      <template v-for="(item, i) in movieCarouselList.data">
        <slide :key="i" class="flex items-center">
          <img
            :src="
              require(`~/assets/images/movie-thumbnail${item.movie_thumbnail_url}`)
            "
            width="243"
            height="364"
          />
          <div class="w-[300px] h-[324px] p-6 bg-black">
            <div class="grid gap-y-3">
              <div class="flex items-center space-x-2">
                <FontIcon :name="'StarIcon'" :color="'#FFB802'" :size="17" />
                <span class="text-subheader2 font-bold text-white">
                  {{ item.movie_rating }}
                </span>
              </div>
              <div class="text-header4 font-medium text-white">
                {{ item.movie_title }}
              </div>
              <div class="flex items-center space-x-2 text-white text-body1">
                <span>{{ item.movie_year }}</span>
                <span class="w-2 h-2 rounded-full bg-white/50" />
                <span>{{ item.movie_genres[0] }}</span>
              </div>
              <div class="text-caption1 text-white text-left">
                {{ item.movie_overview }}
              </div>
            </div>
          </div>
        </slide>
      </template>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper'
import 'hooper/dist/hooper.css'
import FontIcon from '../Icon/FontIcon.vue'
export default Vue.extend({
  name: 'CarouselMovie',
  components: {
    Hooper,
    Slide,
    HooperPagination,
    FontIcon,
  },
  data() {
    return {
      settings: {
        itemsToShow: 3,
        infiniteScroll: true,
        centerMode: true,
        // untuk memberikan kendali penuh pada navigation custom yang saya buat, maka props yang terkait dengan navigasi menggunakan mouse dan keyboard di disable (set false)
        mouseDrag: true,
        touchDrag: false,
        wheelControl: false,
        keysControl: false,
        shortDrag: false,
        autoPlay: false,
        playSpeed: 5000,
        transition: 700,
        hoverPause: false,
      },
    }
  },
  computed: {
    ...mapGetters('movie', ['movieCarouselList']),
  },
  async created() {
    await this.getMovieCarouselList()
  },
  methods: {
    ...mapActions('movie', ['getMovieCarouselList']),
  },
})
</script>

<style lang="scss">
.hooper {
  height: 365px;
}
.hooper-slide {
  opacity: 0.5;
  &.is-current {
    opacity: 1;
  }
}
.hooper-pagination {
  bottom: -56px;
  .hooper-indicators {
    .hooper-indicator {
      width: 12px;
      height: 12px;
      border-radius: 6px;
      margin-right: 16px;
      background-color: rgba(255, 255, 255, 0.5);
      &.is-active {
        width: 60px;
        background-color: #e74c3c;
      }
    }
  }
}
</style>
