<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">
        Área de Cadastro
      </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <!-- Input -->
        <q-input
          label="Name"
          v-model="form.name"
          standout="bg-blue text-white"
        />

        <q-input
          label="Email"
          v-model="form.email"
          standout="bg-blue text-white"
        />

        <q-input
          label="Password"
          v-model="form.password"
          standout="bg-blue text-white"
        />
        <!-- Input -->

        <!-- Btn register -->
        <div class="full-width">
          <q-btn
          label="Cadastrar"
          color="primary"
          class="full-width"
          icon-right="send"
          type="submit"
          outlined
          rounded
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageRegister',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        alert(error)
      }
    }
    return {
      form,
      handleRegister
    }
  }
})
</script>
