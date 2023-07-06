<script setup lang="ts">
import { ref } from "vue";

defineProps({
  text: String,
  hospitais: Array,
});

const dropValue = ref("");

function handleChange(event: Event) {
  dropValue.value = (event.target as HTMLInputElement).value;
}
</script>

<template>
  <BDropdown
    class="dropdown me-2"
    text="Selecione um hospital"
    :value="dropValue"
  >
    <BDropdownItem
      @click="handleChange"
      v-for="hospital in hospitais"
      :value="hospital"
      >{{ hospital }}</BDropdownItem
    >
  </BDropdown>

  <p>Opção selecionada: {{ dropValue }}</p>
</template>

<style>
.dropdown {
  border: 20px;
  border-color: black;
}
</style>

<script lang="ts">
export default {
  name: "Dropdown",
  data() {
    return {
      dropValue: "",
    };
  },
};
</script>
