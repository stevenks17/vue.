<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle} from "@vueuse/core";

const isDark = useDark();
const toggleTheme = useToggle(isDark);
</script>

<template>
  <button 
    @click="toggleTheme()"
    class="px-4 py-2 text-white dark:bg-blue-400 rounded-md dark:hover:bg-blue-600 bg-gray-500 hover:bg-gray-600"
  >
  Toggle Dark Mode
  </button>
</template>

<style>
  html.dark {
    color-scheme: dark;
  }

  body {
    @apply bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50;
  }
</style>
