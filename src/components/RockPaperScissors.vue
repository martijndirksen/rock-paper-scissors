<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { play, Shape, type IApiPlayResponse } from '@/api/rock-paper-scissors';

const shapes: { label: string; value: Shape }[] = [
  { label: '🪨', value: Shape.Rock },
  { label: '🧻', value: Shape.Paper },
  { label: '✂️', value: Shape.Scissors },
];

const selectedShape: Ref<Shape | null> = ref(null);
const playerName: Ref<string | null> = ref(null);
const result: Ref<IApiPlayResponse | null> = ref(null);

async function onSubmit() {
  if (!playerName.value || !selectedShape.value) return;
  result.value = null;

  const response = await play({
    playerName: playerName.value,
    shape: selectedShape.value,
  });

  result.value = response;
}

function onPlayAgain() {
  selectedShape.value = null;
  result.value = null;
}
</script>

<template>
  <div class="rock-paper-scissors">
    <form @submit.prevent="onSubmit">
      <div class="step">
        <p>1. Choose a name</p>

        <input
          class="input"
          type="text"
          v-model.trim="playerName"
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
              :class="{
                'is-selected': selectedShape === value,
                'is-disabled': !!result,
              }"
            >
              <input
                type="radio"
                v-model="selectedShape"
                :value="value"
                :id="value"
                :disabled="!!result"
                name="shapes"
                required
              />
              <span>{{ label }}</span>
            </label>
          </div>

          <Transition>
            <div v-if="selectedShape">
              <button
                v-if="result"
                class="button"
                type="button"
                @click="onPlayAgain"
              >
                Play Again
              </button>
              <button v-else class="button" type="submit">Play</button>
            </div>
          </Transition>
        </div>
      </Transition>
    </form>

    <Transition>
      <div v-show="result" class="result">
        <p>{{ result?.message }}</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.rock-paper-scissors {
  padding: 2rem 0;
  min-height: 477px;
}

.result p {
  text-align: center;
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
  line-height: 1.5;
  border: 1px solid #999999;
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

.radio span {
  user-select: none;
}

.radio.is-selected {
  background-color: var(--primary);
}

.radio.is-disabled {
  cursor: not-allowed;
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
  .rock-paper-scissors {
    min-height: 640px;
  }

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
