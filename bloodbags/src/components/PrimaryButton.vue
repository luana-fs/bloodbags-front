<script setup lang="ts">
defineProps({
  text: String,
  isOff: Boolean,
});
</script>

<template>
  <BButton pill :disabled="isOff" class="button" variant="outline-primary">{{
    text
  }}</BButton>
</template>

<style scoped>
.button {
  color: white;
  background-color: var(--primary);
  border: var(--primary) 1px solid;
}

.button:hover {
  background-color: #fff !important;
  border: var(--primary) 1px solid;
  color: var(--primary);
}
.button:disabled {
  background-color: white !important;
  border: gray 1.5px solid !important;
  color: gray !important;
}
.button:hover:disabled {
  cursor: not-allowed !important;
}
</style>

<script lang="ts">
export default {
  name: "PrimaryButton",
};
</script>
