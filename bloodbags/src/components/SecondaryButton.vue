<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<template>
  <BButton pill class="buttonSec" variant="outline-primary">{{ text }}</BButton>
</template>

<style scoped>
.buttonSec,
.buttonSec:active {
  border-color: var(--primary);
  color: var(--primary);
}

.buttonSec:hover {
  background-color: var(--primary);
  color: white;
}
</style>

<script lang="ts">
export default {
  name: "SecondaryButton",
};
</script>
