<script setup lang="ts">
import Header from "@/components/Header.vue";
import AddRequestForm from "@/components/AddRequestForm.vue";

</script>

<template>
  <Header />
  <main>
    <h1>Criar Solicitação</h1>
    <div class = "add-request-form">
      <AddRequestForm />
    </div>
  </main>
</template>

<style scoped>
main {

  display: flex;
  flex-direction: column;
  height: 50vh;
}
.add-request-form{
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
}

</style>
