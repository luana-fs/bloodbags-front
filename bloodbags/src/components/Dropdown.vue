<script setup lang="ts">
defineProps({
  text: String,
  hospitais: Array,
});
</script>

<template>
  <BDropdown class="dropdown me-2" v-model="show" text="Selecione um hospital">
    <BDropdownItem v-for="hospital in hospitais">{{ hospital }}</BDropdownItem>
  </BDropdown>
</template>

<style>
.dropdown {
  border: 20px;
  border-color: black;
}
</style>

<script lang="ts">
export default {
  name: "PrimaryButton",
};
</script>
