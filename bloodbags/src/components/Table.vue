<script setup lang="ts">
import PrimaryButton from "./PrimaryButton.vue";

defineProps<{
  data: [
    {
      bloodType: number;
      rh: true;
      withdrawalDate: Date;
    }
  ];
  titles: [string];
}>();

function formatDate(dates: Date) {
  const date = new Date(dates);
  return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

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
        <td>{{ types[item?.bloodType] }}</td>
        <td>
          <b>{{ item?.rh ? "+" : "-" }}</b>
        </td>
        <td>{{ formatDate(item?.withdrawalDate) }}</td>
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
