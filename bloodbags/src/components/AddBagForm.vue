<template>
  <main>
    <h1>Adicionar bolsa</h1>
    <div class="add-bag-form">
      <form @submit.prevent="postData">
        <select
          v-model="bloodbag.bloodType"
          class="input"
          id="blood-dropdown"
          name="bloodtype"
        >
          <option :value="undefined" disabled>Tipo Sanguíneo</option>
          <option v-bind:value="0">A</option>
          <option v-bind:value="1">B</option>
          <option v-bind:value="2">AB</option>
          <option v-bind:value="3">O</option>
        </select>
        <select
          v-model="bloodbag.rh"
          class="input"
          id="blood-dropdown"
          name="bloodtype"
        >
          <option value="undefined" disabled>Rh</option>
          <option v-bind:value="true">Positivo</option>
          <option v-bind:value="false">Negativo</option>
        </select>
        <button id="submit" type="submit" :disabled="isDisabled()">
          Adicionar
        </button>
      </form>
    </div>
    <div id="background"></div>
  </main>
</template>

<script lang="ts">
import axios from "axios";
import BloodBag from "./../interfaces/BloodBag";

export default {
  data() {
    return {
      bloodbag: {
        bloodType: undefined,
        hospitalId: +localStorage.getItem("hospitalId")!,
        rh: undefined,
      } as BloodBag,
    };
  },
  methods: {
    async postData() {
      await axios
        .post("https://localhost:7116/api/v1/bloodbag", this.bloodbag)
        .then((response) => {
          alert("Bolsa criada com sucesso!");
          this.bloodbag.bloodType = undefined;
          this.bloodbag.rh = undefined;
        })
        .catch((error) => {
          alert("Não foi possível adicionar a bolsa de sangue.");
        });
    },
    isDisabled() {
      if (
        this.bloodbag.bloodType == undefined || 
        this.bloodbag.rh == undefined
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.add-bag-form {
  width: 100%;
}

.add-bag-form > form {
  display: flex;
  gap: 30px;
}

#background {
  position: absolute;
  z-index: -1;
  background-color: #fafafa;
  width: 100%;
  height: 450px;
  inset: 0;
  margin: auto;
}

#submit {
  background-color: var(--primary);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 10px;
  border: 2px solid var(--primary);
}

#submit:hover {
  transition: 0.4s;
  background-color: #fafafa;
  color: var(--primary);
}

.input {
  border: none;
  border-bottom: 2px solid var(--primary);
  background-color: #fafafa;
}

.input:focus {
  margin: var(--primary);
}

button {
  cursor: pointer;
}

button:disabled {
  background-color: #fafafa !important;
  border-color: lightgray !important;
  color: lightgray !important;
}
button:disabled:hover {
  cursor: not-allowed !important;
}
</style>
