<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import { Shape } from '@/api/rock-paper-scissors';

const shapes: { label: string; value: Shape }[] = [
  { label: '🪨', value: Shape.Rock },
  { label: '🧻', value: Shape.Paper },
  { label: '✂️', value: Shape.Scissors },
];

const selection: Ref<Shape | null> = ref(null);

function onSelect(value: Shape) {
  console.log(value);
  selection.value = value;
}
</script>

<template>
  <div class="wrapper">
    <p>Select a shape</p>
    <div class="radio-group">
      <label
        v-for="{ label, value } in shapes"
        :key="value"
        :for="value"
        class="radio"
        :class="{ 'is-selected': selection === value }"
      >
        <input
          type="radio"
          :value="value"
          :id="value"
          name="shapes"
          @click="onSelect(value)"
        />
        <span>{{ label }}</span>
      </label>
    </div>

    <p>You selected: {{ selection }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 2rem 0;
}

.wrapper > p {
  text-align: center;
  margin-bottom: 0.5rem;
}

.radio-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio input[type='radio'] {
  position: fixed;
  opacity: 0;
  pointer-events: none;
}

.radio {
  font-size: 2rem;
  line-height: 1.5;
  padding: 1rem;
  margin: 0.25rem;
  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  background-color: var(--secondary);
  transition: background-color 0.2s ease-out;
}

.radio.is-selected {
  background-color: #42b883;
}

@media (min-width: 768px) {
  .radio {
    font-size: 4rem;
    padding: 1rem;
    margin: 1rem;
  }
}

@media (min-width: 1024px) {
  .radio {
    font-size: 6rem;
    padding: 2rem;
    margin: 1rem;
  }
}
</style>
