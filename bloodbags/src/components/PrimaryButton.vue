<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<template>
  <BButton class="button" variant="outline-primary">{{ text }}</BButton>
</template>

<style>
:root {
  --primary: #49b5a1;
}
.button {
  color: white;
  background-color: #49b5a1;
  border-radius: 20px;
  border: none;
}

.button:hover {
  background-color: #49b5a1;
}

.button:active {
  /* Arrumar cor ao clicar */
}
</style>

<script lang="ts">
export default {
  name: "PrimaryButton",
};
</script>
