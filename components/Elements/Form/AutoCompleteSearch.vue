<template>
  <div class="relative">
    <!-- input -->
    <div class="px-3 py-1 flex items-center space-x-4 bg-[#1A1E24] rounded-md">
      <div class="opacity-30 flex-none">
        <FontIcon :name="'MovieIcon'" :size="18" :color="'#FFF'" />
      </div>
      <div class="grow">
        <input
          class="text-body1 text-cloud w-full bg-inherit focus:outline-none"
          :value="value"
          @input="$emit('update:value', $event.target.value)"
          @focus="showResult = true"
          @blur="showResult = false"
        />
      </div>
      <div class="flex none">
        <FontIcon :name="'SearchIcon'" :size="18" :color="'#FFF'" />
      </div>
    </div>
    <!-- dropdown result-->
    <div
      v-show="showResult"
      class="absolute bg-[#1A1E24] rounded-md p-5 text-cloud w-full top-8 shadow-2xl"
    >
      <div>Wonder Woman 1984</div>
      <div>Wonder Woman</div>
      <div>Wonder Woman: Bloodlines</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FontIcon from '~/components/Elements/Icon/FontIcon.vue'
export default Vue.extend({
  name: 'AutoCompleteSearch',
  components: {
    FontIcon,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showResult: false,
    }
  },
  watch: {
    value(newValue: string) {
      if (newValue.length > 0) {
        this.showResult = true
      }
    },
  },
})
</script>

<style scoped></style>
