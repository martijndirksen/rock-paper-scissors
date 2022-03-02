<script setup lang="ts">
import ShapeSelector from './components/ShapeSelector.vue';
import PlayerLeaderboard from './components/PlayerLeaderboard.vue';
</script>

<template>
  <div>
    <header>
      <h1>Rock Paper Scissors</h1>
      <h2>A Vue 3 app</h2>
    </header>
    <main>
      <ShapeSelector />

      <Suspense>
        <PlayerLeaderboard />
      </Suspense>
    </main>
  </div>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  text-align: center;
}

header h1 {
  font-size: 1.5rem;
}

header h2 {
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  header h1 {
    font-size: 4rem;
  }

  header h2 {
    font-size: 2rem;
  }
}
</style>
