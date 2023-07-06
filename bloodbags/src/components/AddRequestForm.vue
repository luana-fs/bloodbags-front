<template>
    <main>
      <div class="add-request-form">
        <form @submit.prevent="postData">
      <input type="number" v-model="request.bloodType" placeholder="Tipo Sanguíneo">
      <input type="text" v-model="request.rh" placeholder="Rh">
      <input type="number" v-model="request.amount" placeholder="Quantidade">
      <button id="submit" type="submit">Solicitar</button>
        </form>
      </div>
    </main>
  </template>

<script lang="ts">
import axios from 'axios';
import Request from './../interfaces/Request'

export default {
  data() {
    return {
      request:{
      bloodType: 1,
      hospitalId: 1,
      rh: true,
      amount: 1
} as Request,
    };
  },
  methods: {
    async postData() {
      await axios.post('https://localhost:7116/api/v1/request', this.request)
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