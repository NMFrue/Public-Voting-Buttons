<template>
  <div
    class="emoji-container"
    :style="{
      width: size,
      height: size,
      border: border ? '2px dashed gray' : 'none'
    }"
    role="img"
    :aria-label="ariaLabel"
  >
    <!-- Herz-Emoji -->
    <span class="emoji heart" aria-hidden="true">{{ heart }}</span>
    <!-- Wütendes Gesicht-Emoji -->
    <span class="emoji angry" aria-hidden="true">{{ angry }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: String, default: '2rem' },
  border: { type: Boolean, default: true },
  heart: { type: String, default: '❤️' },
  angry: { type: String, default: '😡' },
  ariaLabel: { type: String, default: 'Überlappende Emojis' }
})

// expose for template
const { size, border, heart, angry, ariaLabel } = props
</script>

<style scoped>
/* Container für die Emojis */
.emoji-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

/* Stil für jedes Emoji */
.emoji {
  position: absolute;
  color: black; /* Farbe der Emojis */
  line-height: 1; /* verhindert vertikale Verschiebung */
  font-size: calc(var(--emoji-size, 1) * 1em);
}

/* Herz-Emoji */
.heart {
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%) scale(1);
}

/* Wütendes Gesicht-Emoji */
.angry {
  top: 65%;
  left: 65%;
  transform: translate(-50%, -50%) scale(1);
  z-index: 1; /* Bringt das wütende Gesicht nach vorne */
}

/* Responsive: wenn Container größer ist, skaliere Emojis automatisch */
.emoji-container[style*="width:"] .emoji {
  /* Die Emojis werden etwa 80% der Containergröße groß */
  font-size: calc(0.8 * (var(--container-size, 2rem)));
}
</style>
