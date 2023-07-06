<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<template>
  <BButton class="button" variant="outline-primary">{{ text }}</BButton>
</template>

<style scoped>
.button {
  color: white;
  background-color: #49b5a1;
  border-radius: 20px;
  border: none;
  margin: 2%;
  padding-right: 3%;
  padding-left: 3%;
}

.button:hover {
  background-color: #49b5a1;
}
</style>

<script lang="ts">
export default {
  name: "PrimaryButton",
};
</script>
