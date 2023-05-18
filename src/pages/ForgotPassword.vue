<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleForgotPassword">
      <p class="col-12 text-h5 text-center"> Reset Password </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <!-- Input -->
        <q-input
          label="Email"
          v-model="email"
          standout="bg-blue text-white"
          type="email"
        />

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
          label="Resetar a senha"
          color="primary"
          class="full-width"
          icon-right="send"
          rounded
          type="submit"
          />

         <q-btn
          label="Voltar"
          color="dark"
          class="full-width"
          icon-right="login"
          outline
          rounded
          :to="{ name: 'login' }"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  setup () {
    const { sendPasswordResetEmail } = useAuthUser()

    const email = ref('')

    const handleForgotPassword = async () => {
      await sendPasswordResetEmail(email.value)
      alert(`Reset de senha enviado para: ${email.value}`)
    }
    return {
      email,
      handleForgotPassword
    }
  }
})
</script>
