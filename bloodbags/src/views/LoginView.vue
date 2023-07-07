<script setup lang="ts">
import Header from "@/components/Header.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import Dropdown from "@/components/Dropdown.vue";

import { onMounted, ref } from "vue";

const hospitals = ref([]);

onMounted(async () => {
  await axios
    .get("https://localhost:7116/api/v1/hospital")
    .then((response) => {
      console.log(response.data);
      hospitals.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<template>
  <main>
    <div class="dropdown-and-button">
      <Dropdown
        :hospitais="hospitals"
        text="Selecione um Hospital"
        :id="childId"
        @selectId="handleIdSelected"
      />
      <PrimaryButton @click="handleClick" text="Selecionar" :disabled="isDisabled()" id="bla"></PrimaryButton>
    </div>
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

export default {
  data() {
    return {
      hospitals: [],
      childId: "",
      hospitalName: "",
    };
  },
  methods: {
    async getHospitals() {
      await axios
        .get("https://localhost:7116/api/v1/hospital")
        .then((response) => {
          console.log(response.data);
          this.hospitals = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleIdSelected(id: number, name: string) {
      console.log(id);
      this.childId = id.toString();
      this.hospitalName = name;
    },
    handleClick() {
      localStorage.setItem("hospitalId", this.childId);
      localStorage.setItem("hospitalName", this.hospitalName);
      router.push("/dashboard");
    },
    isDisabled() {
      if (
        this.hospitalName == ""
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
