<template>
    <q-card>
      <q-card-section>

        <div class="q-gutter-md">

          <div class="flex flex-center">
            <q-btn label="입장하기"
                   icon="login" size="lg"
                   to="/find"
                   color="blue-7" outline />
          </div>

          <q-separator/>

          <div class="text-center">

            <div class="text-subtitle2">toy project 1</div>
            <div class="text-subtitle1"> Cloning the board game "Clue"</div>
            <div class="text-caption bg-grey-5 text-white text-capitalize"> started in 22.10.10</div>


          </div>
        </div>

      </q-card-section>

    </q-card>

</template>

<script setup>

import {useRoute} from "vue-router";

const $routes = useRoute()



</script>
