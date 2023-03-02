<template>
  <div
    class="fixed overflow-hidden top-0 w-full bg-white/5 flex items-center justify-between px-32 py-5"
  >
    <img
      src="~/assets/images/general/moovie-time-logo.png"
      width="120"
      height="32"
    />
    <div class="w-2/3 bg-black/[.13] h-full rounded-md"></div>
    <div class="flex items-center space-x-10">
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="flex items-center text-body2 font-semibold text-cloud uppercase"
      >
        <div v-if="item.icon" class="mr-2 flex items-center justify-center">
          <FontIcon :name="item.icon" :size="20" :color="'#FFF'" />
        </div>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontIcon from '~/components/Elements/Icon/FontIcon.vue'
import { headerMenu } from '~/utils/components'
export default Vue.extend({
  name: 'HeaderNavigation',
  components: {
    FontIcon,
  },
  data() {
    return {
      menu: [...headerMenu],
    }
  },
})
</script>

<style scoped></style>
