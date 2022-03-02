<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import { play, Shape } from '@/api/rock-paper-scissors';

const shapes: { label: string; value: Shape }[] = [
  { label: '🪨', value: Shape.Rock },
  { label: '🧻', value: Shape.Paper },
  { label: '✂️', value: Shape.Scissors },
];

const selectedShape: Ref<Shape | null> = ref(null);
const playerName: Ref<string | null> = ref(null);
</script>

<template>
  <form class="wrapper">
    <div class="step">
      <p>1. Choose a name</p>

      <input
        v-model.trim="playerName"
        class="input"
        type="text"
        maxlength="16"
        placeholder="Enter your name here"
        required
      />
    </div>

    <Transition>
      <div v-if="playerName" class="step">
        <p>2. Select a shape</p>

        <div class="radio-group">
          <label
            v-for="{ label, value } in shapes"
            :key="value"
            :for="value"
            class="radio"
            :class="{ 'is-selected': selectedShape === value }"
          >
            <input
              type="radio"
              v-model="selectedShape"
              :value="value"
              :id="value"
              name="shapes"
              required
            />
            <span>{{ label }}</span>
          </label>
        </div>
      </div>
    </Transition>

    <Transition>
      <div v-if="selectedShape" class="step">
        <button class="button" type="submit">Play</button>
      </div>
    </Transition>
  </form>
</template>

<style scoped>
.wrapper {
  padding: 2rem 0;
}

.step {
  margin-bottom: 2rem;
}

.step > p {
  text-align: center;
  margin-bottom: 0.5rem;
}

.input {
  display: block;
  padding: 1rem;
  margin: 0 auto 1rem auto;
  font-size: 1.25rem;
  border-radius: 4px;
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
  background-color: var(--primary);
}

.button {
  display: block;
  margin: 1rem auto;
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem 4rem;
  color: #fff;
  background-color: var(--primary);
  border: 0;
  border-radius: var(--radius);
  outline: 0 solid var(--primary);
  outline-offset: -1px;
  transition: outline-width 0.2s ease-in-out;
}

.button:hover {
  outline-width: 0.5rem;
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
