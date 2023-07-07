<script setup lang="ts">
import Header from "@/components/Header.vue";
import AddBagForm from "@/components/AddBagForm.vue";
import HomeButton from "@/components/HomeButton.vue";
</script>

<template>
  <main>
    <HomeButton />
    <SecondaryButton
      @click="$router.back()"
      text="Voltar"
      class="back-button"
    />
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

button {
  margin-top: -100px;
}
</style>
