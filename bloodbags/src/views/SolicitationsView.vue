<script setup lang="ts">
import Header from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import SolicitationsTable from "@/components/SolicitationsTable.vue";
import axios from "axios";

import { onMounted, ref } from "vue";

const name = localStorage.getItem("hospitalName");

const requests = ref([]);

onMounted(async () => {
  getRequests()
});

async function getRequests() {
  await axios
    .get(`https://localhost:7116/api/v1/request`)
    .then((response) => {
      console.log(response.data);
      requests.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

function handleDonateClicked() {
  getRequests();
}
</script>

<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <h2>Solicitações</h2>
    <div class="containerButton">
      <SecondaryButton @click="$router.back()" text="Voltar" />
      <PrimaryButton
        @click="$router.push('/addRequest')"
        text="Criar solicitação"
      />
    </div>

    <SolicitationsTable
      v-if="requests.length > 0"
      :data="requests"
      :titles="['Hospital', 'Tipo Sanguíneo', 'RH', 'Quantidade', 'Ações']"
      @donateClicked="handleDonateClicked"
    />
    <p v-else="requests.length < 1">
      Não há solicitações a serem mostradas no momento.
    </p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  position: absolute;
  top:120px;
}
h1 {
  margin-top: -100px;
}
.containerButton {
  width: 100%;
  justify-content: space-around;
  margin-top: 3%;
  margin-bottom: 3%;
}

p {
  color: var(--text);
  font-weight: 500;
}
</style>
