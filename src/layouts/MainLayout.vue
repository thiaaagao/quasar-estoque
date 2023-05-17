<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Sistema de Estoque
        </q-toolbar-title>

        <q-btn-dropdown color="primary" icon="person" rounded>
         <q-list>
          <q-item clickable v-close-popup @click="handleLogout">
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
           </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>

    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)

    const $q = useQuasar()

    const router = useRouter()

    const { logout } = useAuthUser()

    const handleLogout = async () => {
      $q.dialog({
        title: 'Sair',
        message: 'Você deseja mesmo sair ?',
        ok: {
          color: 'negative',
          push: true
        },
        cancel: {
          push: true,
          color: 'primary'
        },
        persistent: true
      }).onOk(async () => {
        await logout()
        router.back({ path: '/login' })
      })
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      handleLogout
    }
  }
})
</script>
