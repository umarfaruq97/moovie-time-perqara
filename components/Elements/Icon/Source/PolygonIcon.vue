<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 0L9.33013 7.5L0.669873 7.5L5 0Z" :fill="color" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PolygonIcon',
  props: {
    size: {
      type: Number,
      required: false,
      default: 12,
    },
    color: {
      type: String,
      required: false,
      default: '#FFB802',
    },
  },
})
</script>

<style scoped></style>
