<script setup>
import { computed, ref } from 'vue'

defineProps({
  statement: {
    type: Object,
    required: true,
  },
})

const weights = [0.5, 1, 2, 4]
const directions = [0, 1, -1]
const feelings = {
  1: {
    0.5: ['🙂', 'Leichte Zustimmung'],
    1: ['😃', 'Zustimmung'],
    2: ['😍', 'Starke Zustimmung'],
    4: ['🥰', 'Entscheidende Zustimmung'],
  },
  '-1': {
    0.5: ['🤔', 'Leichte Ablehnung'],
    1: ['😣', 'Ablehnung'],
    2: ['😠', 'Starke Ablehnung'],
    4: ['🤬', 'Entscheidende Ablehnung'],
  },
}

const direction = ref(0)
const weightIndex = ref(1)

const weight = computed(() => weights[weightIndex.value])
const score = computed(() => direction.value * weight.value)
const tone = computed(() => {
  if (direction.value > 0) return 'positive'
  if (direction.value < 0) return 'negative'
  return 'neutral'
})
const feeling = computed(() => {
  if (direction.value === 0) return ['✓', 'Neutral']
  return feelings[direction.value][weight.value]
})
const formattedScore = computed(() => {
  if (score.value === 0) return '0'
  const number = String(Math.abs(score.value)).replace('.', ',')
  return `${score.value > 0 ? '+' : '−'}${number}`
})
const triggerLabel = computed(() => {
  const nextState = direction.value === 0
    ? 'Zustimmung'
    : direction.value > 0
      ? 'Ablehnung'
      : 'Neutral'
  return `${feeling.value[1]}, ${formattedScore.value} Punkte. Anklicken schaltet weiter zu ${nextState}.`
})

function cycleDirection() {
  const currentIndex = directions.indexOf(direction.value)
  direction.value = directions[(currentIndex + 1) % directions.length]

  if (direction.value === 0) weightIndex.value = 1
}

function selectWeight(index) {
  weightIndex.value = index
}
</script>

<template>
  <article class="rating-card check-card" :data-tone="tone">
    <button
      class="content-trigger"
      type="button"
      :aria-label="triggerLabel"
      @click="cycleDirection"
    >
      <span class="copy">
        <span class="statement">{{ statement.answer }}</span>
        <span class="respondents">
          <span v-for="respondent in statement.respondents" :key="respondent" class="chip">
            {{ respondent }}
          </span>
        </span>
      </span>

      <span class="result-badge">
        <span class="state-symbol" aria-hidden="true">{{ feeling[0] }}</span>
        <span class="score">{{ formattedScore }}</span>
      </span>
    </button>

    <div class="weight-ui weight-dock" :class="{ 'is-revealed': direction !== 0 }">
      <div class="range-shell">
        <input
          v-model.number="weightIndex"
          class="weight-slider"
          type="range"
          min="0"
          max="3"
          step="1"
          aria-label="Gewichtung"
          :aria-valuetext="`Gewichtung ${String(weight).replace('.', ',')}`"
        />
        <div class="weight-stops">
          <button
            v-for="(weightOption, index) in weights"
            :key="weightOption"
            class="weight-stop"
            :class="{ 'is-active': weightIndex === index }"
            type="button"
            :aria-label="`Gewichtung ${String(weightOption).replace('.', ',')}`"
            :aria-pressed="weightIndex === index"
            @click="selectWeight(index)"
          >
            <span
              class="dumbbell"
              :style="{ transform: `scale(${0.58 + index * 0.14})` }"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </div>

    <span class="visually-hidden" aria-live="polite">
      {{ feeling[1] }}, {{ formattedScore }} Punkte
    </span>
  </article>
</template>

<style scoped>
.rating-card {
  --accent: #667085;

  position: relative;
  overflow: visible;
  padding: 11px 12px;
  border: 1px solid #d0d5dd;
  border-radius: 15px;
  background: #f8fafc;
  box-shadow: 0 12px 34px rgb(16 24 40 / 10%);
  transition:
    background 150ms ease,
    border-color 150ms ease,
    transform 150ms ease;
}

.rating-card:hover {
  transform: translateY(-1px);
}

.rating-card[data-tone='positive'] {
  --accent: #137a50;

  border-color: rgb(19 122 80 / 42%);
  background: #eaf8f1;
}

.rating-card[data-tone='negative'] {
  --accent: #b33e3e;

  border-color: rgb(179 62 62 / 42%);
  background: #fff0ef;
}

.content-trigger {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 64px;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #182230 !important;
  cursor: pointer;
  text-align: left;
}

.content-trigger:focus-visible,
.weight-slider:focus-visible,
.weight-stop:focus-visible {
  outline: 3px solid rgb(17 112 202 / 34%);
  outline-offset: 2px;
}

.copy {
  min-width: 0;
}

.statement {
  display: block;
  font-size: 0.9rem;
  font-weight: 690;
  line-height: 1.35;
}

.respondents {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 7px;
}

.chip {
  padding: 1px 7px;
  border: 1px solid rgb(152 162 179 / 62%);
  border-radius: 999px;
  background: rgb(255 255 255 / 65%);
  color: #475467;
  font-size: 0.6rem;
  font-weight: 760;
}

.result-badge {
  display: inline-flex;
  width: 64px;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  justify-self: end;
  border: 1px solid color-mix(in srgb, var(--accent) 48%, white);
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 12%, white);
  color: var(--accent);
  font-size: 0.78rem;
  font-variant-numeric: tabular-nums;
  font-weight: 900;
  line-height: 1;
}

.state-symbol {
  display: grid;
  min-width: 18px;
  place-items: center;
  color: inherit;
  font-size: 1rem;
}

.score {
  color: inherit;
  white-space: nowrap;
}

.rating-card[data-tone='neutral'] .state-symbol {
  opacity: 0.42;
}

.rating-card[data-tone='neutral'] .result-badge {
  border-style: dashed;
  border-radius: 11px;
  animation: invite 1.25s 500ms 2 ease-in-out;
}

.weight-ui {
  cursor: default;
}

.weight-dock {
  max-height: 0;
  margin-top: 0;
  padding: 0 7px;
  overflow: hidden;
  border-top: 1px solid transparent;
  opacity: 0;
  pointer-events: none;
  clip-path: inset(0 0 100% 78% round 8px);
  transform: translate(26px, -6px);
  transform-origin: right top;
  transition:
    max-height 320ms cubic-bezier(0.22, 1, 0.36, 1),
    margin-top 320ms cubic-bezier(0.22, 1, 0.36, 1),
    padding-top 320ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 180ms ease,
    opacity 160ms ease,
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
    clip-path 320ms cubic-bezier(0.22, 1, 0.36, 1);
}

.weight-dock.is-revealed {
  max-height: 42px;
  margin-top: 7px;
  padding-top: 4px;
  border-top-color: rgb(152 162 179 / 42%);
  opacity: 1;
  pointer-events: auto;
  clip-path: inset(0 0 0 0 round 0);
  transform: translate(0, 0);
}

.range-shell {
  display: grid;
  grid-template-rows: 15px 19px;
  min-width: 0;
}

.weight-slider {
  width: 100%;
  height: 15px;
  margin: 0;
  accent-color: var(--accent);
  cursor: pointer;
  touch-action: pan-y;
}

.weight-dock .weight-slider {
  opacity: 0;
  transform: scaleX(0.24);
  transform-origin: right center;
  transition:
    opacity 150ms 90ms ease,
    transform 260ms 70ms cubic-bezier(0.22, 1, 0.36, 1);
}

.weight-dock.is-revealed .weight-slider {
  opacity: 1;
  transform: scaleX(1);
}

.weight-stops {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
}

.weight-stop {
  display: grid;
  min-width: 0;
  min-height: 19px;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #98a2b3 !important;
  cursor: pointer;
}

.weight-stop.is-active {
  background: rgb(255 255 255 / 82%);
  color: var(--accent) !important;
}

.weight-dock .weight-stop {
  opacity: 0;
  transform: translateY(-5px) scale(0.72);
  transition:
    opacity 150ms ease,
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.weight-dock.is-revealed .weight-stop {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.weight-dock.is-revealed .weight-stop:nth-child(1) {
  transition-delay: 100ms;
}

.weight-dock.is-revealed .weight-stop:nth-child(2) {
  transition-delay: 135ms;
}

.weight-dock.is-revealed .weight-stop:nth-child(3) {
  transition-delay: 170ms;
}

.weight-dock.is-revealed .weight-stop:nth-child(4) {
  transition-delay: 205ms;
}

.dumbbell {
  display: inline-block;
  width: 20px;
  height: 8px;
  border-radius: 1px;
  background:
    linear-gradient(currentcolor, currentcolor) center / 100% 2px no-repeat,
    linear-gradient(currentcolor, currentcolor) left center / 4px 8px no-repeat,
    linear-gradient(currentcolor, currentcolor) right center / 4px 8px no-repeat;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@keyframes invite {
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 5px rgb(102 112 133 / 8%);
  }
}

@media (max-width: 370px) {
  .rating-card {
    padding-left: 10px;
  }

  .statement {
    font-size: 0.84rem;
  }

  .content-trigger {
    grid-template-columns: minmax(0, 1fr) 58px;
  }

  .result-badge {
    width: 58px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .rating-card,
  .result-badge,
  .weight-dock,
  .weight-dock .weight-slider,
  .weight-dock .weight-stop {
    animation: none;
    transition: none;
  }
}
</style>
