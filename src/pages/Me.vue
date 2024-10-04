<template>
  <q-page padding>
     <div v-if="user">
        <div>Seja bem vindo {{ user.user_metadata.name }}</div>
     </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageMe',

  setup () {
    const { user } = useAuthUser()

    return {
      user
    }
  }
})
</script>
