<script setup lang="ts">
import { ref } from "vue";

defineProps({
  text: String,
});

const onHover = ref(false);
</script>

<template>
  <BButton
    pill
    @click="$router.push('/dashboard')"
    class="buttonSec"
    variant="outline-primary"
  >
    <img width="25" src="../../public/icons/icons8-home-96.png" />
  </BButton>
</template>

<style scoped>
.buttonSec,
.buttonSec:active {
  border-color: var(--primary);
  color: var(--primary);
  padding-right: 3%;
  padding-left: 3%;
}

img:hover {
  filter: brightness(0) invert(1);
}

.buttonSec:hover {
  background-color: var(--primary);
  color: white;
}
</style>

<script lang="ts">
export default {
  name: "SecondaryButton",
};
</script>
