<script setup>
import { computed } from 'vue'
import HookRailRatingCard from '@/components/VotingElements/HookRailRatingCard.vue'
import { exampleQuestions } from '@/data/exampleQuestions'

const props = defineProps({
  questionId: {
    type: String,
    required: true,
  },
})

const question = computed(() =>
  exampleQuestions.find((entry) => entry.id === props.questionId),
)
</script>

<template>
  <div v-if="question" class="hook-rail-page">
    <h1>{{ question.question }}</h1>

    <section class="rating-list" aria-label="Antworten bewerten">
      <HookRailRatingCard
        v-for="statement in question.statements"
        :key="statement.answer"
        :statement="statement"
      />
    </section>
  </div>
</template>

<style scoped>
.hook-rail-page {
  position: relative;
  isolation: isolate;
  width: min(100% - 24px, 460px);
  margin: 0 auto;
  padding: 28px 0 48px;
  color: #182230;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.hook-rail-page::before {
  position: fixed;
  z-index: -1;
  inset: 0;
  background:
    radial-gradient(circle at 15% 0%, rgb(19 122 80 / 9%), transparent 31rem),
    #eef2f6;
  content: '';
}

h1 {
  margin: 0 0 20px;
  color: #182230;
  font-size: clamp(1.55rem, 7vw, 2rem);
  line-height: 1.08;
}

.rating-list {
  display: grid;
  gap: 14px;
}

@media (max-width: 370px) {
  .hook-rail-page {
    width: min(100% - 14px, 460px);
    padding-top: 18px;
  }
}
</style>
