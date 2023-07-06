<template>
    <main>
      <div class="add-bag-form">
        <form @submit.prevent="postData">
      <input type="number" v-model="bloodbag.bloodType" placeholder="Tipo Sanguíneo">
      <input type="text" v-model="bloodbag.rh" placeholder="Rh">
      <button id="submit" type="submit">Adicionar Bolsa</button>
        </form>
      </div>
    </main>
  </template>

<script lang="ts">
import axios from 'axios';
import BloodBag from './../interfaces/BloodBag'

export default {
  data() {
    return {
     bloodbag:{
      bloodType: 1,
      hospitalId: 1,
      rh: true
} as BloodBag,
    };
  },
  methods: {
    async postData() {
      await axios.post('https://localhost:7116/api/v1/bloodbag', this.bloodbag)
        .then(response => {
          // TO-DO: Mostrar pop-up de sucesso
          console.log(response.data);
        })
        .catch(error => {
          // TO-DO: Mostrar pop-up de erro
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>

</style>