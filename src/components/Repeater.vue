<template>
  <div>
    <!-- Loop über repeattimes und rendere das übergebene Element dynamisch -->
    <component
      v-for="n in repeattimes"
      :key="n"
      :is="componentToRender"
      v-bind="propsToPass"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  repeattimes: {
    type: Number,
    required: true
  },
  componentToRender: {
    type: Object, // kann Vue-Komponente sein
    required: true
  },
  propsToPass: {
    type: Object, // optional Props an die gerenderte Komponente
    default: () => ({})
  }
})
</script>
