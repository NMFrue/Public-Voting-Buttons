<template>
  <div class="overview">
    <h1>Übersicht</h1>
    <nav aria-label="Bewertungsmechanismen">
      <router-link :to="{ name: 'buttons1' }">Buttons 1</router-link>
      <router-link :to="{ name: 'hookRailBroadcast' }">
        M32.7.2 – Haken-Schiene: Rundfunkgebühren
      </router-link>
      <router-link :to="{ name: 'hookRailWind' }">
        M32.7.2 – Haken-Schiene: Windkraftanlagen
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
.overview {
  width: min(100% - 2rem, 800px);
  margin: 0 auto;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}
</style>
