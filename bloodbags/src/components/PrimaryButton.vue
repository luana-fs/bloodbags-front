<script setup lang="ts">
defineProps({
  text: String,
  isOff: Boolean
});
</script>

<template>
  <BButton :disabled="isOff" class="button" variant="outline-primary">{{ text }}</BButton>
</template>

<style scoped>
.button {
  color: white;
  background-color: #49b5a1;
  border-radius: 10px;
  border: none;
  margin: 2%;
  padding-right: 3%;
  padding-left: 3%;
}

.button:hover {
  background-color: #fff !important;
  border: #49b5a1 1px solid  !important;
  color : #49b5a1

}
.button:disabled {
  background-color: white !important;
  border: gray 1.5px solid !important;
  color: gray !important;
}
.button:disabled:hover {
  cursor: not-allowed !important;
}
</style>

<script lang="ts">
export default {
  name: "PrimaryButton",
};
</script>
