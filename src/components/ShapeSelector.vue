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
  <div class="shape-selector">
    <p>Select a shape</p>
    <div class="buttons">
      <button
        v-for="{ label, value } in shapes"
        :key="value"
        :title="value"
        @click="onSelect(value)"
      >
        {{ label }}
      </button>
    </div>
    <p>You selected: {{ selection }}</p>
  </div>
</template>

<style scoped>
.shape-selector {
  padding: 2rem 0;
}

.shape-selector p {
  text-align: center;
  margin-bottom: 0.5rem;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons button {
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

.buttons button:hover {
  background-color: #42b883;
}

@media (min-width: 768px) {
  .buttons button {
    font-size: 4rem;
    padding: 1rem;
    margin: 1rem;
  }
}

@media (min-width: 1024px) {
  .buttons button {
    font-size: 6rem;
    padding: 2rem;
    margin: 1rem;
  }
}
</style>
