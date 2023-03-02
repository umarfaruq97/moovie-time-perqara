<template>
  <header
    class="fixed top-0 w-full bg-white/5 flex items-center space-x-9 px-32 py-5 z-10"
  >
    <img
      src="~/assets/images/general/moovie-time-logo.png"
      width="120"
      height="32"
    />
    <div class="grow">
      <AutoCompleteSearch />
    </div>
    <div class="flex items-center justify-end space-x-10">
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
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import FontIcon from '~/components/Elements/Icon/FontIcon.vue'
import AutoCompleteSearch from '~/components/Elements/Form/AutoCompleteSearch.vue'
import { headerMenu } from '~/utils/components'
export default Vue.extend({
  name: 'HeaderNavigation',
  components: {
    FontIcon,
    AutoCompleteSearch,
  },
  data() {
    return {
      menu: [...headerMenu],
    }
  },
})
</script>

<style scoped></style>
