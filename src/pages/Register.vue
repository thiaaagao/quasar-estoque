<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Área de Cadastro</p>

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
          :type="isPwd ? 'password' : 'text'"
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

        <q-input
          label="Confirm your password"
          v-model="confirmPassword"
          standout="bg-blue text-white"
          :type="isPwdConfirm ? 'password' : 'text'"
        >
          <q-icon @click.stop.prevent="pass = null" class="cursor-pointer" />
            <template v-slot:append>
              <q-icon
              :name="isPwdConfirm ? 'visibility_off':'visibility'"
              @click="isPwdConfirm = !isPwdConfirm"
              class="cursor-pointer"
              />
            </template>
        </q-input>
        <!--   Input -->

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
        <div class="full-width q-pt-md-4">
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
import { useRouter } from 'vue-router'
import useAuthUser from 'src/composables/UseAuthUser'

export default defineComponent({
  name: 'PageRegister',

  setup () {
    const confirmPassword = ref('')
    const router = useRouter()
    const { register } = useAuthUser()
    const isPwd = ref(true)
    const isPwdConfirm = ref(true)
    const form = ref({
      name: '',
      email: '',
      password: ''
    })
    const passwordMatch = () => {
      return this.password === this.confirmPassword
    }

    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        // console.error(error)
      // console.error(form.value)
        console.error(form.value.api)
      }
    }

    return {
      form,
      handleRegister,
      isPwd,
      isPwdConfirm,
      passwordMatch,
      confirmPassword
    }
  }
})
</script>
