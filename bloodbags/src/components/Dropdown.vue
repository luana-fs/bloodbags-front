<script setup lang="ts">
import { PropType, ref } from "vue";

type Hospital = {
  id : number;
  name: string;
  address: string;
  cellPhone: string;
  bloodBags: any;
};

const props = defineProps({
  text: String,
  hospitais: Array as PropType<Hospital[]>,
});

const dropValue = ref(props.text);

function handleChange(value: string) {
  dropValue.value = value;
}
</script>

<template>
  <BDropdown
    class="dropdown me-2"
    :text="dropValue"
    :value="dropValue"
  >
    <BDropdownItem
      @click="handleChange(hospital.name)"
      v-for="hospital in hospitais"
      :value="hospital"
      :key="hospital.id"
      >{{ hospital.name }}</BDropdownItem
    >
  </BDropdown>

</template>

<style>
.dropdown {
  border: 20px;
  border-color: black;
}
</style>

<script lang="ts">
export default {
  name: "Dropdown",
  data() {
    return {
      dropValue: "",
    };
  },
};
</script>
