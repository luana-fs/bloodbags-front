<script setup lang="ts">
import BloodBagsTable from "@/components/BloodBagsTable.vue";
import Header from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import axios from "axios";

import { onMounted, ref } from "vue";

const bloodbags = ref([]);

const name = localStorage.getItem("hospitalName");
const id = localStorage.getItem("hospitalId");

onMounted(async () => {
  await axios
    // .get(`https://localhost:7116/api/v1/bloodbag/2`)
    .get(`https://localhost:7116/api/v1/bloodbag/${id}`)
    .then((response) => {
      console.log(response.data);
      bloodbags.value = response.data;
    })
    .catch((error) => {
      // TO-DO: Mostrar pop-up de erro
      console.error(error);
    });
});
</script>

<template>
  <div class="container">
    <h1>Bem-Vindo, {{ name }}</h1>

    <div class="containerButton">
      <SecondaryButton
        @click="$router.push('/solicitations')"
        text="Ver solicitações"
      />
      <PrimaryButton
        @click="$router.push('/addRequest')"
        text="Criar solicitação"
      />
      <PrimaryButton @click="$router.push('/addBag')" text="Adicionar Bolsa" />
    </div>

    <h3>Estoque de Bolsas</h3>
    <BloodBagsTable
      v-if="bloodbags.length > 0"
      :data="bloodbags"
      :titles="['Tipo Sanguíneo', 'RH', 'Data']"
    />
    <p v-else="bloodbags.length < 1">O estoque está vazio.</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 89vh;
}
.containerButton {
  margin-top: 1%;
  margin-bottom: 10%;
}

p {
  color: var(--text);
  font-weight: 500;
}
</style>
