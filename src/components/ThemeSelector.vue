<template>
  <button @click="toggleTheme">Toggle theme</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref('dark-mode');

const toggleTheme = () => {
  theme.value = theme.value === 'light-mode' ? 'dark-mode' : 'light-mode';
  document.body.className = theme.value;
  console.log('Theme:', theme.value);
};

// If you want the theme preference to persist between page reloads, you can store it in localStorage.
if (localStorage.getItem('theme')) {
  theme.value = localStorage.getItem('theme')!;
  document.body.className = theme.value;
}
</script>

<style>
:root {
  --light-bg-color: #fff;
  --light-text-color: #333;
  --dark-bg-color: #05090c;
  --dark-text-color: #edf0f2;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-mode {
  --bg-color: var(--dark-bg-color);
  --text-color: var(--dark-text-color);
}

.light-mode {
  --bg-color: var(--light-bg-color);
  --text-color: var(--light-text-color);
}
</style>