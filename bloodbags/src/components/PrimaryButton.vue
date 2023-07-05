<script setup lang="ts">
defineProps ({
  text: String
})
</script>

<template>
  <BButton class="button" variant="outline-primary">{{ text }}</BButton>
</template>

<style>
.button{
  color: white;
  background-color: #49B5A1;
  border-radius: 20px;
  border: none;
}

.button:hover {
  background-color: #49B5A1;
}

.button:active {
  /* Arrumar cor ao clicar */
}
</style>

<script lang="ts">
  export default {
    name: 'PrimaryButton'
  }
</script>
