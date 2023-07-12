<script setup lang="ts">
import Header from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Dropdown from "@/components/Dropdown.vue";

import { onMounted, ref } from "vue";

const hospitals = ref([]);
</script>

<template>
  <main>
    <div>
      <form @submit.prevent="login">
        <input required v-model="user.email" type="email" placeholder="Email">
        <input required v-model="user.password" type="password" placeholder="Password">
        <div>
          <button>Login</button>
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
import router from "@/router";
import type User from "@/interfaces/User";

export default {
  data() {
    return {
      user: {
        email : "",
        password : ""
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
    }
  },
};
</script>
