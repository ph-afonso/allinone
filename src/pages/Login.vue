<template>
  <q-page class="row bg-accent">
    <div class="col-xs-12 full-width flex column justify-center items-start q-pa-lg">
      <q-avatar size="75px">
        <img src="supa.png">
      </q-avatar>
      <div class="text-white">
        <h1 class="text-h5">Bem vindo de volta</h1>
        <p class="text-h6 text-grey-6 text-subtitle1">Faça login em sua conta</p>
      </div>
      <div class="full-width q-gutter-y-lg">
        <q-btn outline no-caps color="grey-6" icon="radio_button_checked" label="Continue com GitHub"
          style="width: 100%;" />
        <Divider classLine="bg-grey-6 rounded" text="ou" />

        <div class="q-gutter-y-sm">
          <div class="q-gutter-y-sm">
            <label class="text-white text-bold">Email</label>
            <q-input outlined color="grey-6" placeholder="voce@exemplo.com" v-model="text" class="text-white "
              input-class="text-white" />
          </div>
          <div class="q-gutter-y-sm">
            <label class="flex  justify-between items-center text-white text-bold">
              <span>Password</span>
              <span>Recuperar</span>
            </label>
            <q-input outlined color="grey-6" type="password" placeholder="º º º º º º º" v-model="passord"
              class="text-white" input-class="text-white" />
          </div>
          <q-btn no-caps color="secondary" label="Fazer Login" style="width: 100%;" />
        </div>
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
})
</script>