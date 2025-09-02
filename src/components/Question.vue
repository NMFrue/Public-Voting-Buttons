<template>
<div class="CON-contentBox">
  <div class="GEN-back-button-space">
    <router-link to="/">◄</router-link>
  </div>
  <div class="GEN-action-button-space">
    <button>⋯</button>
  </div>
  <div class="GEN-headline">
    <a>Übersichtliche Beschreibung</a>
  </div>

  <div class="CON-contentContainer CON-headline">
    <h1>{{ headline }}</h1>
     <!-- <h1>hallo</h1> -->
  </div>
</div> 
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  headline: {
    type: String,
    required: true
  }
})
</script>



<style>


.CON-Container {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    width: 800px;
    box-sizing: border-box;
  }



.CON-contentBox {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--General-highlight-Color);
    bottom: 0px;
}


.CON-contentContainer {
    width: 100%;
    position: relative;
    text-align: left;
    padding: 10px 10px;
}


.CON-statement {
    margin-top: 1em;
}

.GEN-back-button-space {
  float: left;
  padding: 5px;
}

.GEN-action-button-space {
  float: right;
  padding: 5px;  
}

.GEN-headline {
  padding: 10px;
  text-align: center;
}

</style>
