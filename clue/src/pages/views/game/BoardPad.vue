<template>
  <div class="row" v-for="vertical in 23" :key="vertical">


    <div v-for="horizon in 23" :key="horizon">
      <div>
        <q-btn :label="`${vertical}.${horizon}`"
               class="field"
               :color="fieldStyle(vertical, horizon)"
               outline square/>
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref} from 'vue'

const fieldStyle = (vertical, horizon) => {

  const verticalLimit = []
  for (let i = 0; i < 6; i++) {
    verticalLimit.push(Math.round((23 - 6) / 2) + i)
  }

  const horizonLimit = []
  for (let i = 0; i < 4; i++) {
    horizonLimit.push(Math.round((23 - 4) / 2) + i)
  }

  // 집
  if (verticalLimit.includes(vertical) && horizonLimit.includes(horizon)) {
    return 'white'
  }

  return 'blue'
}

</script>

<style scoped>
.field {
  min-height: 50px;
  max-height: 50px;
  min-width: 50px;
  max-width: 50px;
  overflow: hidden;
}

</style>
