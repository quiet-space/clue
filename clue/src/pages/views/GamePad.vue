<template>
  <q-card class="row window-width window-height">

    <q-card-section class="col-3">

      Chat

    </q-card-section>

    <q-separator class="q-mx-md" vertical inset />

    <q-card-section class="col">

      Board

      <board-pad />

    </q-card-section>
  </q-card>
</template>

<script setup>
import BoardPad from "pages/views/game/BoardPad";
</script>

<style scoped>

</style>
