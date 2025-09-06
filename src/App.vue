<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main>
    <router-view />
  </main>

  <DropdownDialog />
</template>


<script>
import DropdownDialog from "@/components/DropdownDialog.vue";

export default {
  components: {
    DropdownDialog,
  },
};
</script>



<style scoped>

body {
	margin: 0;
}


:root{
  --Background-Color: white;
  --General-highlight-Color: rgb(29, 29, 29); 
}


/* Das folgende ist von Vue.js */
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>

