<template>
  <BNav class="header">
    <img src="../../public/icons/icons8-blood-96.png" height="40" />
    <h1>Gerenciador de Hospitais</h1>
  </BNav>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  background-color: #49b5a1;
  height: 100px;
}

img {
  margin-right: 0.8%;
}
</style>

<script lang="ts">
export default {
  name: "Header",
};
</script>
