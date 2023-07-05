<script setup lang="ts">
defineProps ({
    text : String,
    hospitais: Array
})  
</script>

<template>
    <!-- <BDropdown class="dropdown" v-model="show" text= {{ text }}>
        <BDropdownItem v-for="hospital in hospitais">hospital</BDropdownItem>
    </BDropdown> -->
</template>

<style>
.dropdown{

}
</style>

<script lang="ts">
  export default {
    name: 'PrimaryButton'
  }
</script>