<script setup lang="ts">
import Header from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import axios from "axios";

import { onMounted, ref } from "vue";

const requests = ref([]);

onMounted(async () => {
  // const id = localStorage.getItem("hospitalId");
  await axios
    .get(`https://localhost:7116/api/v1/request`)
    .then((response) => {
      console.log(response.data);
      requests.value = response.data;
    })
    .catch((error) => {
      // TO-DO: Mostrar pop-up de erro
      console.error(error);
    });
});
</script>

<!-- int idHospital
rh booleano
bloodType number
int amount -->

<template>
  <Header />
  <div class="container">
    <h1>Solicitações</h1>

    <div class="btn-group containerButton">
      <SecondaryButton @click="$router.back()" text="Voltar" />
      <PrimaryButton text="Criar solicitações" />
    </div>

    <Table
      :data="[
        {
          BloodType: 'AB',
          Rh: true,
          WithdrawalDate: '05/07/2023',
        },
        {
          BloodType: 'O Mockado',
          Rh: true,
          WithdrawalDate: '05/07/2023',
        },
        {
          BloodType: 'A mochado',
          Rh: true,
          WithdrawalDate: '05/07/2023',
        },
        {
          BloodType: 'Adwewa',
          Rh: true,
          WithdrawalDate: '05/07/2023',
        },
      ]"
      :titles="['Tipo Sanguíneo', 'RH', 'Quantidade']"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: aquamarine;
  height: 89vh;
}
.containerButton {
  width: 50%;
  justify-content: space-around;
  height: 5%;
  margin-top: 3%;
  margin-bottom: 3%;

  background-color: red;
}
</style>
