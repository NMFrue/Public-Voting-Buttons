<template>
<div class="CON-Container"></div>

<!--Anfang Des Voting Elements -->
<div class="main-container">

    <Question :headline="headline" />

    <component
      v-for="n in repeattimes"
      :key="n"
      :is="componentToRender"
      v-bind="propsToPass"
    />

    <router-link to="/">Zurück zur Startseite</router-link>
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
  },
  headline: {
    type: String,
    required: true
  }
})
</script>



<style>

.center-button {
  display: block;         /* Damit margin funktioniert */
  margin: 50px auto 0;    /* 50px Abstand nach oben, automatisch links/rechts */
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.main-container {
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 0;
}


.content-box-wrapper {
	width: 100%;
	box-sizing: border-box;
	padding: 5px;
}


@media only screen and (max-width: 800px) {
    .CON-Container {
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
