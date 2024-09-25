<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { matAllInbox, matMenu } from '@quasar/extras/material-icons'

export default defineComponent({
  name: 'App',
  created () {
    this.matAllInbox = matAllInbox
    this.matMenu = matMenu
  }
})
</script>
