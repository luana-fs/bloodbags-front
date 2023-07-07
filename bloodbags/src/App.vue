<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import SecondaryButton from "./components/SecondaryButton.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <main id="container">
    <RouterView id="router" />
  </main>
</template>

<style>
:root {
  --primary: #49b5a1;
  --text: #212121;
}

button {
  padding-right: 3%;
  padding-left: 3%;
  margin-right: 2%;
  margin-top: 2%;
}

#router{
  margin-top: 100px
}

#container {
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
