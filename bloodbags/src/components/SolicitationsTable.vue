<script setup lang="ts">
import Request from "@/interfaces/Request";
import PrimaryButton from "./PrimaryButton.vue";

defineProps<{
  data: Request[];
  titles: string[];
}>();

const types = ["A", "B", "AB", "O"];
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="item in titles">{{ item }}</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in data">
        <td>{{ item.hospitalName }}</td>
        <td>{{ types[item.bloodType!] }}</td>
        <td>
          <b>{{ item.rh! ? "+" : "-" }}</b>
        </td>
        <td>{{ item.amount }}</td>
        <td>
          <PrimaryButton text="Atender" @click="handleAttendClick(item.id!, item.amount!)"/>
        </td>
        <td>
          <PrimaryButton text="Excluir" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-radius: 20px;
}
th {
  text-align: center;
  color: #49b5a1;
  font-weight: 600;
  border-color: #49b5a1;
  border-bottom-width: 2px;
}

td {
  border-color: #49b5a1;
  border-bottom-width: 2px;
  text-align: center;
  color: #252525;
}
</style>

<script lang="ts">
import axios from "axios";
export default {
    
    methods: {
        async handleAttendClick(idRequest: number, amount: number) {
        await axios
            .post(`https://localhost:7116/api/v1/request/donate`,
            {
                donorId:+localStorage.getItem("hospitalId")!,
                requestId:idRequest,
                amount
            })
            .catch((error) => {
            // TO-DO: Mostrar pop-up de erro
            console.error(error);
            });
        }
    },
};
</script>