<script setup lang="ts">
import Header from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Dropdown from "@/components/Dropdown.vue";
</script>

<template>
  <main>
    <div class="dropdown-and-button">
      <Dropdown
        :hospitais="[
          'Mãe de Deus',
          'Moinhos',
          'Ernesto Dornelles',
          'Hospital Santa Teresa',
        ]"
        text="Selecione um Hospital"
      />
      <PrimaryButton @click="getHospitals" text="Selecionar"></PrimaryButton>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 89vh;
  margin: 0;
}
.dropdown-and-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      hospitals: [],
    };
  },
  methods: {
    async getHospitals() {
      await axios
        .get("https://localhost:7116/api/v1/hospitals")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          // TO-DO: Mostrar pop-up de erro
          console.error(error);
        });
    },
  },
};
</script>
