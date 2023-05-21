<script setup lang="ts">
 import Card from "./components/Card.vue";


</script>

<template>
  <div id="app">
    <header>
      <h1 class="text-5xl py-10 text-gray-400 font-normal text-center">
        ANI<strong class="text-blue-400">ME</strong> DATABASE
      </h1>
      <div>
        <form class="flex justify-center">
          <input
            type="search"
            class="search-field"
            placeholder="Search for anime..."
          />
        </form>
      </div>
    </header>
    <main>
      <div class="cards">
        <Card />
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

  &::placeholder {
    color: #aaa;
  }

  &:focus,
  &:valid {
    color: #fff;
    background-color: #313131;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
  }
}
</style>
