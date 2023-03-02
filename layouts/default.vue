<template>
  <div class="bg-dark-default min-h-screen">
    <HeaderNavigation />
    <Nuxt />
    <FooterNavigation />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FooterNavigation from '~/components/Elements/Navigation/FooterNavigation.vue'
import HeaderNavigation from '~/components/Elements/Navigation/HeaderNavigation.vue'
export default Vue.extend({
  components: {
    HeaderNavigation,
    FooterNavigation,
  },
})
</script>

<style></style>
