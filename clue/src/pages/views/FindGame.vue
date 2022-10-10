<template>
  <q-card>
    <q-card-section style="width: 400px; height: 400px">


      <q-list>
        <q-item v-for="game in gameList" :key="game">
          <q-item-section>
            <div class="flex items-center justify-between">
              <div class="row">
                <q-icon name="sports_esports" size="sm" color="primary"/>
                <div class="text-subtitle1 q-ml-sm cursor-pointer" @click="onClickEnter">{{ game.subject }}</div>
              </div>
              <div class="row">
                <q-separator vertical/>
                <div class="text-weight-bold q-ml-sm text-amber-7">방장</div>
                <div class="text-weight-bold q-ml-sm">{{ game.owner }}</div>
              </div>
            </div>
            <q-separator/>
          </q-item-section>
        </q-item>
      </q-list>

    </q-card-section>
  </q-card>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const gameList = ref([{subject: 'Test Game 1', owner: '김방장'}, {subject: 'Test Game 2', owner: '오방장'}])

const $router = useRouter()
const onClickEnter = () => {
  $router.push('/game/1')
}

</script>

<style scoped>

</style>
