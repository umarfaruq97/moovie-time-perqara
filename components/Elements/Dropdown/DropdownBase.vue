<template>
  <div class="relative">
    <div class="w-full cursor-pointer" @click="handleClick()">
      <slot name="toggler"></slot>
    </div>
    <div v-show="open" class="absolute">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DropdownBase',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const self = this
    window.addEventListener('click', function (e: MouseEvent) {
      // close dropdown when clicked outside
      e.stopPropagation()
      if (!self.$el.contains(e.target as any)) {
        self.$emit('update:open', false)
      }
    })
  },
  methods: {
    handleClick() {
      this.$emit('update:open', !this.open)
    },
  },
})
</script>

<style scoped></style>
