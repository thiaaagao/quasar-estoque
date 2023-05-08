<template>
  <q-page padding>
    <q-form class="row justify-center">
      <p class="col-12 text-h5 text-center" @submit.prevent="">
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
          label="Senha"
          v-model="form.password"
          standout="bg-blue text-white"
          type="password"
        />
        <!-- Input -->

        <!-- Btn Login-->
        <div class="full-width q-pt-md">
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

        <!-- Btn register
        <div class="full-width">
          <q-btn
          label="Cadastrar"
          color="primary"
          class="full-width"
          icon-right="send"
          flat
          rounded
          to="/register"
          />
        </div> -->

      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const form = ref({
      email: '',
      password: ''
    })

    return {
      form
    }
  }
})
</script>
