<template>
  <main>
    <div class="add-request-form">
      <form @submit.prevent="postData">
        <select v-model="request.bloodType" name="bloodtype">
          <option v-bind:value="0">A</option>
          <option v-bind:value="1">B</option>
          <option v-bind:value="2">AB</option>
          <option v-bind:value="3">O</option>
        </select>
        <input
          type="number"
          v-model="request.amount"
          placeholder="Quantidade"
        />
        <label for="rh">+</label>
        <input
          type="radio"
          name="rh"
          v-model="request.rh"
          v-bind:value="true"
        />
        <label for="rh">-</label>
        <input
          type="radio"
          name="rh"
          v-model="request.rh"
          v-bind:value="false"
        />
        <button id="submit" type="submit">Solicitar</button>
      </form>
    </div>
  </main>
</template>

<script lang="ts">
import axios from "axios";
import Request from "./../interfaces/Request";

export default {
  data() {
    return {
      request: {
        bloodType: 1,
        hospitalId: 1,
        rh: true,
        amount: 1,
      } as Request,
    };
  },
  methods: {
    async postData() {
      await axios
        .post("https://localhost:7116/api/v1/request", this.request)
        .then((response) => {
          // TO-DO: Mostrar pop-up de sucesso
          console.log(response.data);
          this.request.amount = undefined;
          this.request.bloodType = undefined;
          this.request.rh = undefined;
        })
        .catch((error) => {
          // TO-DO: Mostrar pop-up de erro
          console.error(error);
        });
    },
  },
};
</script>

<style scoped></style>
