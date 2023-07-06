<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import SecondaryButton from "./components/SecondaryButton.vue";
</script>

<template>
  <Table
    :data="[
      {
        BloodType: 'ABaa',
        Rh: true,
        WithdrawalDate: '05/07/2023',
      },
      {
        BloodType: 'Adwewa',
        Rh: true,
        WithdrawalDate: '05/07/2023',
      },
      {
        BloodType: 'Adwewa',
        Rh: true,
        WithdrawalDate: '05/07/2023',
      },
      {
        BloodType: 'Adwewa',
        Rh: true,
        WithdrawalDate: '05/07/2023',
      },
    ]"
    :titles="['Tipo Sanguíneo', 'RH', 'Data']"
  />

  <RouterView />
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 89vh;
}

.dropdown-and-button {
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
}
</style>
