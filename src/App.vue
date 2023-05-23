<script setup lang="ts">
import Card from "./components/Card.vue";
import { ref } from "vue";
import axios from "axios";

interface Anime {
  mal_id: number;
  title: string;
  url: string;
  image_url: string;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date: string;
  end_date: string;
  members: number;
  rated: string;
}


const search = ref("");
const animeList = ref<Anime[]>([]);

const searchAnime = async () => {
  try {
    if (search.value !== "") {
      const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${search.value}`);

      if (res.data && res.data.data) { // Check if data array exists
        animeList.value = res.data.data;
        console.log("Anime list:", animeList.value);
      } else {
        console.log("Data array not found in response data");
      }
    }
  } catch (error) {
    console.error("There was an error with the fetch operation: ", error);
  }
};

</script>

<template>
  <div id="app">
    <header>
      <h1 class="text-5xl py-10 text-gray-400 font-normal text-center">
        ANI<strong class="text-blue-400">ME</strong> DATABASE
      </h1>
      <div>
        <form class="flex justify-center" @submit.prevent="searchAnime">
          <input
            required
            type="search"
            class="search-field"
            placeholder="Search for anime..."
            v-model="search"
          />
        </form>
      </div>
    </header>
    <main class="max-w-xl mt-4 mx-auto px-7">
      <div class="flex flex-wrap m-0 -mr-2">
        <Card v-for="anime in animeList" :key="anime.mal_id" :anime="anime"/>
      </div>
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}

a {
  text-decoration: none;
}

.search-field {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  background-color: #f3f3f3;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  display: block;
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 8px;
  color: #313131;
  font-size: 20px;
  transition: 0.4s;
}

.search-field::placeholder {
  color: #aaa;
}

.search-field:focus,
.search-field:valid {
  color: #fff;
  background-color: #313131;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
}
</style>
