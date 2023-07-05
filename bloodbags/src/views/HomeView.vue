<script setup lang="ts">
import Header from '@/components/Header.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import Dropdown from '@/components/Dropdown.vue';

const hospitaisExistentes: Array<string> = [ "Hospital 1", "Hospital 2", "Hospital 3" ];
</script>

<template>
  <Header></Header>
  <main>
    <div class="dropdown-and-button">
      <!-- <Dropdown hospitais=hospitaisExistentes text="Selecione um Hospital"></Dropdown> -->
      <PrimaryButton text="Selecionar"></PrimaryButton>
    </div>
  </main>
</template>

<style>
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 89vh;
}

.dropdown-and-button{
  width: 100%;
  background-color: black;
}
</style>
