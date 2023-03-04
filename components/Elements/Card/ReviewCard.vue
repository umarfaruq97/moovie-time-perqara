<template>
  <div class="bg-light-grey-02 rounded-xl p-6">
    <div class="w-full flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <img
          class="w-12 h-12 rounded-full"
          :src="require(`~/assets/images/general/user-avatar.jpg`)"
        />
        <div class="grid gap-y-1">
          <div class="text-base2 font-bold text-dark-default">
            {{ review.review_name }}
          </div>
          <div class="text-caption1 text-light-grey-03">
            {{ review.review_date }}
          </div>
        </div>
      </div>
      <div class="flex space-x-2 pl-2 pr-4 py-2 bg-[#C4C4C4] rounded-lg">
        <FontIcon :name="'StarIcon'" :color="'#FFB802'" :size="17" />
        <div class="text-header2 text-black font-semibold">
          {{ review.review_rating }}
        </div>
      </div>
    </div>
    <div class="mt-7 w-[534px] italic text-black overflow-hidden text-ellipsis">
      {{ review.review_explanation }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MovieReview } from '~/types/movie'
import FontIcon from '~/components/Elements/Icon/FontIcon.vue'

export default Vue.extend({
  name: 'ReviewCard',
  components: {
    FontIcon,
  },
  props: {
    review: {
      type: Object,
      default: () =>
        ({
          review_id: '',
          review_name: 'Switch',
          review_date: 'Desember 18, 2020',
          review_explanation: '',
          review_rating: 7.0,
          review_image: '',
        } as MovieReview),
    },
  },
})
</script>

<style scoped></style>
