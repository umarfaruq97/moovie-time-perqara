<template>
  <DropdownBase :open.sync="open">
    <template #toggler>
      <div
        class="bg-light-black flex items-center justify-between py-2 px-4 rounded-md"
      >
        <span class="text-cloud font-semibold text-body2">
          {{ selected.sort_name }}
        </span>
        <div
          :class="`flex items-center justify-center ${
            selected.order_by === 'asc' ? 'rotate-0' : 'rotate-180'
          }`"
        >
          <FontIcon :name="'PolygonIcon'" :size="12" :color="'#E5E5E5'" />
        </div>
      </div>
    </template>
    <template #content>
      <div class="grid gap-y-3 p-4 bg-black shadow-md rounded-md">
        <div
          v-for="(sort, index) in sortingList"
          :key="index"
          :class="`cursor-pointer text-caption1 text-white hover:font-bold mb-2 ${
            selected.id === sort.id ? 'font-extrabold' : ''
          }`"
          @click="handleSelect(sort)"
        >
          {{ sort.title }}
        </div>
      </div>
    </template>
  </DropdownBase>
</template>

<script lang="ts">
import Vue from 'vue'
import DropdownBase from './DropdownBase.vue'
import FontIcon from '~/components/Elements/Icon/FontIcon.vue'
import { SorterType } from '~/types/components'
import { sortingDropdownData } from '~/utils/movie'
export default Vue.extend({
  name: 'SortingDropdown',
  components: {
    DropdownBase,
    FontIcon,
  },
  props: {
    selected: {
      type: Object,
      default: () =>
        ({
          id: '1',
          sort_by: 'movie_views',
          sort_name: 'Popularity',
          order_by: 'asc',
          title: 'Popularity Ascending',
        } as SorterType),
    },
  },
  data() {
    return {
      open: false,
      sortingList: [...sortingDropdownData],
    }
  },
  methods: {
    handleSelect(sorter: SorterType) {
      if (this.selected.id !== sorter.id) {
        this.$emit('update:selected', sorter)
      } else {
        this.$emit('update:selected', {
          id: '',
          sort_name: '',
          order_by: 'asc',
          sort_by: '',
          title: '',
        })
      }
      this.open = false
    },
  },
})
</script>

<style scoped></style>
