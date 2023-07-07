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
        <td id="amount-td" v-if="item.showInput">
          <input
            id="amount-input"
            required
            type="number"
            v-model="selectedAmount"
            placeholder="Quantidade"
            :maxlength="item.amount"
            :max="item.amount"
          />
          <PrimaryButton
            id="amount-input"
            text="Atender"
            @click="() => {handleAttendClick(item.id!); changeAmountInput()}"
          />
        </td>
        <td id="attend-action-column" v-else="">
          <PrimaryButton
            id="attend-button"
            text="Atender"
            @click="() => {changeAmountInput(); item.showInput = true }"
          />
        </td>
        <td>
          <!-- <PrimaryButton text="Excluir" /> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>
<!-- @click="handleAttendClick(item.id!, item.amount!)" -->
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
  padding: 5px 0;
  border-top-width: 2px;
  text-align: center;
  vertical-align: middle;
  color: #252525;
}

#amount-td {
  position: relative;
}

input#amount-input {
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 3%;
  border-radius: 10px;
  border: none;
  width: 90px;
  background-color: #fff !important;
  border: #49b5a1 1px solid !important;
  color: #49b5a1;
  height: 36px;
}
#amount-input {
  position: absolute;
  top: 6.5px;
  bottom: 10px;
  right: 3%;
  border-radius: 10px;
  border: none;
  width: 90px;
  background-color: #fff !important;
  border: #49b5a1 1px solid !important;
  color: #49b5a1;
  height: 36px;
}
#attend-button {
  width: 100%;
}
#attend-action-column {
  width: 200px;
}
</style>

<script lang="ts">
import axios from "axios";
import { ref } from "vue";
const selectedAmount = ref(0);
const showInput = ref(false);
export default {
  methods: {
    sendDonateClickedToFather() {
      this.$emit("donateClicked");
    },
    async handleAttendClick(idRequest: number) {
      await axios
        .post(`https://localhost:7116/api/v1/request/donate`, {
          donorId: +localStorage.getItem("hospitalId")!,
          requestId: idRequest,
          amount: selectedAmount.value,
        })
        .then(() => {
          this.sendDonateClickedToFather();
        })
        .catch((error) => {
          // TO-DO: Mostrar pop-up de erro
          console.error(error);
        });
    },
    changeAmountInput() {
      selectedAmount.value = 0;
      this.data.forEach((row)=>{
        row.showInput = false
      })
    },
  },
};
</script>
