<template>
  <MarsMap :url="configUrl" map-key="test" @onload="marsOnload" />
</template>

<script setup lang="ts">
import * as mars3d from 'mars3d'
import MarsMap from './components/mars-work/mars-map.vue'

const configUrl = 'config/config.json'

const marsOnload = (map: any) => {
  console.log('marsOnload')
}
</script>

<style></style>
