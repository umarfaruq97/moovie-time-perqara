<template>
  <component :is="name" :color="color" :size="size" />
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryIcon from './Source/CategoryIcon.vue'
import MovieIcon from './Source/MovieIcon.vue'
import SearchIcon from './Source/SearchIcon.vue'
import StarIcon from './Source/StarIcon.vue'
export default Vue.extend({
  name: 'FontIcon',
  components: {
    CategoryIcon,
    StarIcon,
    MovieIcon,
    SearchIcon,
  },
  props: {
    size: {
      type: Number,
      default: 24,
    },
    name: {
      type: String,
      default: 'CategoryIcon',
    },
    color: {
      type: String,
      default: '#8C8CA2',
    },
  },
})
</script>

<style scoped></style>
