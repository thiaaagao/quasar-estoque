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
          type="password"
        />
        <!-- Input -->

        <!-- Btn Login-->
        <div class="full-width">
          <q-btn
          label="Login"
          color="primary"
          class="full-width"
          icon-right="login"
          outline
          rounded
          type="submit"
          />
        </div>

        <!-- Btn register -->
        <div class="full-width">
          <q-btn
          label="Cadastrar"
          color="primary"
          class="full-width"
          icon-right="send"
          rounded
          to="/register"
          />
        <div class="full-width q-pt-md-4">
          <q-btn
          label="Esqueceu a sua senha?"
          color="primary"
          class="full-width"
          flat
          rounded
          size="sm" />
          </div>
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
      handleLogin
    }
  }
})
</script>
