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
  <div class="flex justify-center flex-grow flex-shrink w-1/3 p-2 mb-4">
  <div class="flip-card group">
      <img class="m-4 transform transition-all duration-400 group-hover:scale-105 object-cover rounded-xl shadow-md" 
        :src="anime.images.jpg.image_url" 
        :alt="anime.title" 
      />
      <h3 class=" flex justify-center w-64 break-all p-4 text-gray-800 transition-all duration-400 group-hover:text-blue-400">{{ anime.title }}</h3>
    </div>
  </div>
</template>
<style>
* {
border:1px solid red !important;
}

</style>