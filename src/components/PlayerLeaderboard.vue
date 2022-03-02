<script async setup lang="ts">
import { getPlayers } from '@/api/rock-paper-scissors';

const players = await getPlayers();
const topTen = [...players].sort((a, b) => b.score - a.score).slice(0, 10);
</script>

<template>
  <div class="player-leaderboard">
    <h2>Leaderboard</h2>
    <ol v-if="topTen && topTen.length">
      <li v-for="({ name, score }, i) in topTen" :key="i">
        <p>
          <span class="name">{{ name }}</span>
          <span class="score">{{ score }}</span>
        </p>
      </li>
    </ol>
    <p v-else>The leaderboard is empty</p>
  </div>
</template>

<style scoped>
.player-leaderboard {
  padding: 1rem;
  max-width: 512px;
  margin: auto;

  background-color: var(--secondary);
  border-radius: var(--radius);
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-align: center;
}

ol {
  font-size: 0.875rem;
  padding-left: 2rem;
}

li::marker {
  font-weight: 700;
}

li p {
  display: flex;
  align-items: center;
}

.name {
  flex-grow: 1;
}

.score {
  font-weight: 500;
}

@media (min-width: 768px) {
  .player-leaderboard {
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;
  }

  ol {
    font-size: 1rem;
  }
}
</style>
