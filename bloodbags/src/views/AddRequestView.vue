<script setup lang="ts">
import AddRequestForm from "@/components/AddRequestForm.vue";
</script>

<template>
  <main>
    <div class="back-button">
      <SecondaryButton
        @click="$router.back()"
        text="Voltar"
        id="returnButton"
      />
    </div>
    <h1>Criar Solicitação</h1>

    <div class="add-request-form">
      <AddRequestForm />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 60%;
  /* background-color: blue; */
}
.add-request-form {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  height: 100%;
}

.back-button {
  width: 100%;
}
</style>
