<script setup lang="ts">
import { PropType } from "vue";

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
  id: String,
  selectId: Function
});

</script>

<template>
  <BDropdown
    class="dropdown me-2"
    :text="dropValue"
    :value="dropValue"
  >
    <BDropdownItem
      @click="sendIdToParent(hospital.name, hospital.id)"
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
      dropValue: "Selecione um Hospital",
    };
  },
  methods: {
    sendIdToParent(name: string, id: number) {
      this.dropValue = name;
      this.$emit('selectId', id);
    },
  },
};
</script>
