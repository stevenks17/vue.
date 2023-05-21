<script>
  export default {
    props: {
      anime: {
        type: Object,
        required: true,
      },
    },
  };
</script>
<template>
  <div class="flex-grow flex-shrink w-1/3 max-w-1/3 p-2 mb-4">
    <a :href="anime.url" target="_blank" class="group">
      <img class="transform transition-all duration-400 group-hover:scale-105 object-cover rounded-xl shadow-md" :src="anime.images.jpg.image_url" :alt="anime.title" />
      <h3 class="p-4 text-gray-800 transition-all duration-400 group-hover:text-blue-400">{{ anime.title }}</h3>
    </a>
  </div>
</template>