<template>
  <form @submit.prevent="postData">
    <div class="inputs">
      <BDropdown v-model="request.bloodType" name="bloodtype" text="Tipo">
        <BDropdownItem v-bind:value="0">A</BDropdownItem>
        <BDropdownItem v-bind:value="1">B</BDropdownItem>
        <BDropdownItem v-bind:value="2">AB</BDropdownItem>
        <BDropdownItem v-bind:value="3">O</BDropdownItem>
      </BDropdown>

      <div class="radio-buttons">
        <input
          class="form-check-input"
          type="radio"
          name="rh"
          v-model="request.rh"
          v-bind:value="true"
        />
        <label class="form-check-label mr-1" for="rh"> + </label>
        <input
          class="form-check-input"
          type="radio"
          name="rh"
          v-model="request.rh"
          v-bind:value="false"
        />
        <label class="form-check-label" for="rh">-</label>
      </div>
    </div>
    <input type="number" v-model="request.amount" placeholder="Quantidade" />
    <div class="button-container">
      <PrimaryButton text="Solicitar" id="submit" type="submit" />
    </div>
  </form>
</template>

<script lang="ts">
import axios from "axios";
import Request from "./../interfaces/Request";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Dropdown from "@/components/Dropdown.vue";

export default {
  components: { Dropdown, PrimaryButton },
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
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.inputs {
  display: flex;
  /* background-color: blueviolet; */
  width: 100%;
  margin-bottom: 5%;
}
input {
  border: none;
  focus: none;
  border-bottom: 3px solid var(--primary);
}

label {
  margin-right: 20px;
  font-weight: bold;
  font-size: x-large;
}

.radio-buttons {
  /* background-color: aquamarine; */

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.button-container {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  width: 90%;
  padding-top: 3%;
  /* background-color: aqua; */
}
</style>
