<template>


  <form @submit.prevent="postData">

    <div class="inputs">
      <Dropdown
          :hospitais="[
          'A',
          'B',
          'AB',
          'O',
        ]"
          text="Selecione um tipo sanguíneo"
      />
<!--      <select v-model="request.bloodType" name="bloodtype">-->
<!--        <option v-bind:value="0">A</option>-->
<!--        <option v-bind:value="1">B</option>-->
<!--        <option v-bind:value="2">AB</option>-->
<!--        <option v-bind:value="3">O</option>-->
<!--      </select>-->
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
    </div>
    <input
        type="number"
        v-model="request.amount"
        placeholder="Quantidade"
    />
    <PrimaryButton text="Solicitar" id="submit" type="submit"></PrimaryButton>
  </form>
</template>

<script lang="ts">
import axios from "axios";
import Request from "./../interfaces/Request";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Dropdown from "@/components/Dropdown.vue";

export default {
  components: {Dropdown, PrimaryButton},
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

<style scoped>
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 60%;
}
.inputs{
  display: flex;
  width: 50%;

}
input{
  border: none;
  focus: none;
  border-bottom: 3px solid var(--primary);
}
</style>
