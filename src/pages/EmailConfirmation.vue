<template>
  <q-page class="flex flex-center">
    <q-card dark class="bg-blue-9 my-card">
      <q-card-section>
        <div class="text-h4">Cadastro recebido com sucesso!</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section class="text-h6">
        <!--div class="text-h8"><strong>Email:</strong> {{ $route.query.email }}</!--div-->
          <div class="text-subtitle">Por gentileza, confirme a ativação do acesso através do email cadastrado: <strong>{{ $route.query.email }}</strong></div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-btn push color="white" text-color="blue" class="text-h8 white" :to="{ name: 'register' }"><strong>Sair</strong></q-btn>
      </q-card-actions>
    </q-card>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
