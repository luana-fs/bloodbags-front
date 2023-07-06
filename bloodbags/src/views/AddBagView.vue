<script setup lang="ts">
import Header from "@/components/Header.vue";
import AddBagForm from "@/components/AddBagForm.vue";
</script>

<template>
  <main>
    <SecondaryButton @click="$router.back()" text="Voltar" />
    <AddBagForm />
  </main>
</template>

<style scoped>
.dropdown-and-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
