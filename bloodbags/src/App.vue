<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import SecondaryButton from "./components/SecondaryButton.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <main id="container">
    <RouterView id="router"/>
  </main>
</template>

<style>
:root {
  --primary: #49b5a1;
  --text: #212121;
}

#container {
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
