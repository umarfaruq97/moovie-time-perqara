<template>
  <footer
    class="mt-12 bg-black px-32 py-16 w-full flex items-center justify-between"
  >
    <div class="text-body2 text-dark-grey">
      © 2021 MoovieTime. All rights reserved.
    </div>
    <img
      src="~/assets/images/general/moovie-time-logo-footer.png"
      width="88"
      height="24"
    />
    <div class="text-body2 text-dark-grey">
      Made with <b>NUXT JS Framework</b>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterNavigation',
})
</script>

<style scoped></style>
