<script setup lang="ts">
import PrimaryButton from "./PrimaryButton.vue";

defineProps<{
  data: [
    {
      BloodType: string;
      Rh: true;
      WithdrawalDate: String;
    }
  ];
  titles: [string];
}>();
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
        <td>{{ item?.BloodType }}</td>
        <td>
          <b>{{ item?.Rh ? "+" : "-" }}</b>
        </td>
        <td>{{ item?.WithdrawalDate }}</td>
        <td>
          <PrimaryButton text="X" />
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
