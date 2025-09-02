<script setup lang="ts">
  import VotingElement1 from '@/components/VotingElements/VotingElement1.vue';
</script>

<template>
  <div>
    <Repeater
      headline="Buttons 1"
      :repeattimes="5"
      :component-to-render="VotingElement1"
      :props-to-pass="{ text: 'Hallo Welt' }"
    />
  </div>
</template>