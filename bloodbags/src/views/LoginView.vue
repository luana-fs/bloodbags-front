<script setup lang="ts">
import Header from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Dropdown from "@/components/Dropdown.vue";

import { onMounted, ref } from "vue";

const hospitals = ref([]);
</script>

<template>
  <main>
    <div class="">
      <form @submit.prevent="login">
        <input required class="form-check-input" v-model="user.email" type="email" placeholder="Email">
        <input required class="form-check-input" v-model="user.password" type="password" placeholder="Password">
        <div>
          <button id="submit" type="submit" :disabled="isDisabled()">Login</button>
        </div>
      </form>
    </div>
    <!-- <div class="dropdown-and-button">
      <Dropdown
        :hospitais="hospitals"
        text="Selecione um Hospital"
        :id="childId"
        @selectId="handleIdSelected"
      />
      <PrimaryButton @click="handleClick" text="Selecionar" :disabled="isDisabled()" id="bla"></PrimaryButton>
    </div> -->
  </main>
</template>

<style scoped>
#submit {
  background-color: var(--primary);
  border-radius: 30px;
  color: white;
  border: none;
  margin-top: 10px;
  padding: 10px 25px;
  border: 2px solid var(--primary);
}

#submit:hover {
  transition: 0.4s;
  background-color: #fafafa;
  color: var(--primary);
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
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 89vh;
  margin: 0;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.inputs {
  display: flex;
  width: 100%;
  margin-bottom: 5%;
}
input {
  border: none;
  focus: none;
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  border-bottom: 3px solid var(--primary);
}
</style>

<script lang="ts">
import axios from "axios";
import router from "@/router";
import type User from "@/interfaces/User";

export default {
  data() {
    return {
      user: {
        email : undefined,
        password : undefined
      }
    };
  },
  methods: {
    async login() {
      await axios
        .post("https://localhost:7116/api/v1/login", this.user)
        .then((response) => {
          localStorage.setItem("hospitalId",response.data.hospitalId);
          localStorage.setItem("hospitalName",response.data.hospitalName);
          this.$router.push("/");
        })
        .catch((error) => {
          alert("Email ou senha invalidos.")
        });
    },
    isDisabled() {
      if (
        this.user.email == undefined ||
        this.user.password == undefined ||
        this.user.email == ""||
        this.user.password == "" 
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
