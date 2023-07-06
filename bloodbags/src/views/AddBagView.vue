<script setup lang="ts">
import Header from "@/components/Header.vue";
import AddBagForm from "@/components/AddBagForm.vue";
</script>

<template>
  <main>
    <SecondaryButton @click="$router.back()" text="Voltar" id="returnButton"/>
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

#returnButton {
  margin-top: -100px;
}

</style>
