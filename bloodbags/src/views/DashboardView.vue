<script setup lang="ts">
import Header from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import router from "@/router";
import axios from "axios";

import { onMounted, ref } from "vue";

const bloodbags = ref([]);

const name = localStorage.getItem("hospitalName");
const id = localStorage.getItem("hospitalId");

onMounted(async () => {
  await axios
    .get(`https://localhost:7116/api/v1/bloodbag/2`)
    // .get(`https://localhost:7116/api/v1/bloodbag/${id}`)
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

    <div class="btn-group containerButton">
      <SecondaryButton
        @click="$router.push('/solicitations')"
        text="Ver solicitações"
      />
      <PrimaryButton text="Criar solicitação" />
      <PrimaryButton @click="$router.push('/addBag')" text="Adicionar Bolsa" />
    </div>

    <h3>Estoque de Bolsas</h3>
    <Table :data="bloodbags" :titles="['Tipo Sanguíneo', 'RH', 'Data']" />
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
  height: 5%;

  background-color: red;
}
</style>

<!-- <script>
export default {
  data() {
    return {
      bloodbags: [],
      childId: "",
    };
  },
};
</script> -->
