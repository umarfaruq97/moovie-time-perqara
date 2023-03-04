<template>
  <header
    class="fixed top-0 w-full bg-white/5 flex items-center space-x-9 px-32 py-5 z-10"
  >
    <img
      src="~/assets/images/general/moovie-time-logo.png"
      width="120"
      height="32"
      class="cursor-pointer"
      @click="$router.push('/')"
    />
    <div class="grow">
      <AutoCompleteSearch />
    </div>
    <div class="flex items-center justify-end space-x-10">
      <CategoryDropdown />
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="text-body2 font-semibold text-cloud uppercase"
      >
        {{ item.name }}
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryDropdown from '../Dropdown/CategoryDropdown.vue'
import AutoCompleteSearch from '~/components/Elements/Form/AutoCompleteSearch.vue'
import { headerMenu } from '~/utils/components'
export default Vue.extend({
  name: 'HeaderNavigation',
  components: {
    AutoCompleteSearch,
    CategoryDropdown,
  },
  data() {
    return {
      menu: [...headerMenu],
    }
  },
})
</script>

<style scoped></style>
