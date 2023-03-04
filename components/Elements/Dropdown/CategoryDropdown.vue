<template>
  <DropdownBase :open.sync="open">
    <template #toggler>
      <div class="flex items-center space-x-4">
        <div class="flex items-center justify-center">
          <FontIcon :name="'CategoryIcon'" :size="20" :color="'#E5E5E5'" />
        </div>
        <span class="text-cloud font-semibold text-body2">CATEGORIES</span>
      </div>
    </template>
    <template #content>
      <div
        class="grid gap-y-3 p-4 text-caption1 uppercase text-dark-default font-semibold bg-white shadow-md rounded-md"
      >
        <div
          v-for="(cat, index) in categories"
          :key="index"
          :class="`hover:text-black hover:font-bold ${
            selected === cat
              ? 'font-extrabold cursor-default'
              : 'cursor-pointer'
          }`"
          @click="handleSelectCategory(cat)"
        >
          {{ cat }}
        </div>
      </div>
    </template>
  </DropdownBase>
</template>

<script lang="ts">
import Vue from 'vue'
import DropdownBase from '~/components/Elements/Dropdown/DropdownBase.vue'
import FontIcon from '~/components/Elements/Icon/FontIcon.vue'
import { categories } from '~/utils/movie'
export default Vue.extend({
  name: 'CategoryDropdown',
  components: {
    DropdownBase,
    FontIcon,
  },
  data() {
    return {
      categories: [...categories],
      selected: this.$route.query?.genres,
      open: false,
    }
  },
  methods: {
    handleSelectCategory(cat: string) {
      if (this.$route.query?.genres) {
        if (!this.$route.query?.genres.includes(cat)) {
          this.selected = cat
          this.$router.push(`/browse?genres=${cat}&page=1&limit=10`)
          this.open = false
        }
      } else {
        this.selected = cat
        this.$router.push(`/browse?genres=${cat}&page=1&limit=10`)
        this.open = false
      }
    },
  },
})
</script>

<style scoped></style>
