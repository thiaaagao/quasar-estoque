<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center">
        Área de Login
      </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <!-- Input -->
        <q-input
          label="Email"
          v-model="form.email"
          standout="bg-blue text-white"
          type="email"
        />
        <q-input
          label="Password"
          v-model="form.password"
          standout="bg-blue text-white"
          :type="isPwd ? 'password': 'text'"
        >
          <q-icon @click.stop.prevent="pass = null" class="cursor-pointer" />
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              @click="isPwd = !isPwd"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <!-- Input -->
        <!-- Btn Login-->
        <!-- Btn register -->
        <div class="full-width q-gutter-y-sm">
          <q-btn
          label="Login"
          color="primary"
          class="full-width"
          icon-right="login"
          outline
          rounded
          type="submit"
          />
          <q-btn
          label="Cadastrar"
          color="primary"
          class="full-width"
          icon-right="send"
          rounded
          to="/register"
          />
          <q-btn
          label="Esqueceu a sua senha ?"
          color="primary"
          class="full-width"
          flat
          rounded
          to="/forgot-password"
          size="sm" />
          </div>
        </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const router = useRouter()
    const isPwd = ref(true)
    const { login } = useAuthUser()

    const form = ref({
      email: '',
      password: ''
    })
    // bypass de login form value
    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({ path: '/me' })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleLogin,
      isPwd
    }
  }
})
</script>
