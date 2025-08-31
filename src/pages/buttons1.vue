<script setup lang="ts">
import VotingElement1 from '@/components/VotingElements/VotingElement1.vue';

</script>

<template>
  <div>
    <h1>About</h1>

    <Repeater
      :repeattimes="5"
      :component-to-render="VotingElement1"
      :props-to-pass="{ text: 'Hallo Welt' }"
    />


    <router-link to="/">Zurück zur Startseite</router-link>

  </div>
</template>