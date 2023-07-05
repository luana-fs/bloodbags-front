<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 89vh;
}

.dropdown-and-button {
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
}
</style>
