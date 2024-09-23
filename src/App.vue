<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { matMenu } from '@quasar/extras/material-icons'

export default defineComponent({
  name: 'App',
  created () {
    this.matMenu = matMenu
  }
})
</script>
