<template>
  <form @submit.prevent="postData">
    <div class="inputs">
      <BDropdown name="bloodtype" type="number" :text="textValue" required>
        <BDropdownItem @click="handleBloodTypeChange(0)">A</BDropdownItem>
        <BDropdownItem @click="handleBloodTypeChange(1)">B</BDropdownItem>
        <BDropdownItem @click="handleBloodTypeChange(2)">AB</BDropdownItem>
        <BDropdownItem @click="handleBloodTypeChange(3)">O</BDropdownItem>
      </BDropdown>
      
      <div class="radio-buttons">
        <label for="rh">RH</label>
        <input required
          class="form-check-input"
          type="radio"
          name="rh"
          v-model="request.rh"
          v-bind:value="true"
        />
        <label class="form-check-label mr-1" for="rh"> + </label>
        <input required
          class="form-check-input"
          type="radio"
          name="rh"
          v-model="request.rh"
          v-bind:value="false"
        />
        <label class="form-check-label" for="rh">-</label>
      </div>
    </div>
    <input required type="number" v-model="request.amount" placeholder="Quantidade" />
    <div class="button-container">
      <PrimaryButton :is-off="isDisabled()" text="Solicitar" id="submit" type="submit" />
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
      textValue: "Tipo",
      request: {
        bloodType: undefined,
        hospitalId: +localStorage.getItem('hospitalId')!,
        rh: undefined,
        amount: undefined,
      } as Request,
      types : ["A", "B", "AB", "O"]
    };
  },
  methods: {
    async postData() {
      await axios
        .post("https://localhost:7116/api/v1/request", this.request)
        .then((response) => {
          // TO-DO: Mostrar pop-up de sucesso
          alert('Solicitação criada com sucesso');
          this.request.amount = undefined;
          this.request.bloodType = undefined;
          this.request.rh = undefined;
          this.textValue = "Tipo";
        })
        .catch((error) => {
          alert('Não foi possível criar a solicitação')
        });
    },
    handleBloodTypeChange(value: any) {
      this.request.bloodType = value;
      this.textValue = this.types[value];
    },
    isDisabled() {
    if (this.request.bloodType == undefined || this.request.rh == undefined || (this.request.amount == 0 || this.request.amount == undefined)) {
      return true;
    }
    return false;
  }
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

span{
  margin-left: 7px;
  font-size: 20px;
}
</style>
