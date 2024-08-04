<template>
  <q-page class="row bg-accent fullscreen">
    <div class="col-xs-12 col-md-4 justify-center items-start flex column q-pa-lg">
      <q-avatar size="75px">
        <img src="supa.png">
      </q-avatar>
      <div class="text-white">
        <h1 class="text-h5">Bem vindo de volta</h1>
        <p class="text-h6 text-grey-6 text-subtitle1">Faça login em sua conta</p>
      </div>
      <div class="full-width q-gutter-y-lg">
        <q-btn class="full-width" outline no-caps color="grey-6" icon="radio_button_checked" label="Continue com GitHub"/>
        <Divider classLine="bg-grey-6 rounded" text="ou" />
        <div class="q-gutter-y-sm">
          <div class="q-gutter-y-sm">
            <label class="text-white text-bold">Email</label>
            <q-input outlined color="grey-6" placeholder="email@exemplo.com" v-model="text" class="text-white" input-class="text-white" />
          </div>
          <div class="q-gutter-y-sm">
            <label class="flex justify-between items-center text-white text-bold">
              <span>Password</span>
              <span>Recuperar</span>
            </label>
            <q-input outlined color="grey-6" type="password" placeholder="º º º º º º º" v-model="password" class="text-white" input-class="text-white" />
          </div>
          <q-btn class="full-width" no-caps color="secondary" label="Fazer Login" />
        </div>
      </div>
    </div>
    <div v-if="$q.screen.width > 425" class="col-md-8 justify-center items-center flex q-pa-lg">
      <div class="full-width text-center text-white">
        <h2 class="text-h4">Bem-vindo ao Nosso Sistema!</h2>
        <p>Por favor, faça login para continuar.</p>
        <!-- Adicione mais conteúdo aqui, se necessário -->
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Divider from 'components/utils/Divider.vue';

export default defineComponent({
  name: 'PageLogin',
  components: {
    Divider
  }
});
</script>