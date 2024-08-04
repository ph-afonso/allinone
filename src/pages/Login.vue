<template>
  <q-page class="row bg-accent fullscreen">
    <div class="col-xs-12 col-md-4 justify-center items-start flex column q-pa-lg">
      <q-avatar size="75px">
        <img src="supa.png">
      </q-avatar>
      <div class="text-white">
        <h1 class="text-h5">Bem-vindo de volta</h1>
        <p class="text-h6 text-grey-6 text-subtitle1">Faça login em sua conta</p>
      </div>
      <div class="full-width q-gutter-y-lg">
        <q-btn class="full-width" outline no-caps color="grey-6" icon="radio_button_checked"
          label="Continue com GitHub" />
        <Divider classLine="bg-grey-6 rounded" text="ou" />
        <div class="q-gutter-y-sm">
          <div class="q-gutter-y-sm">
            <label class="text-white text-bold">Email</label>
            <q-input outlined color="grey-6" placeholder="email@exemplo.com" v-model="text" class="text-white"
              input-class="text-white" />
          </div>
          <div class="q-gutter-y-sm">
            <label class="flex justify-between items-center text-white text-bold">
              <span>Password</span>
              <span>Recuperar</span>
            </label>
            <q-input outlined color="grey-6" type="password" placeholder="º º º º º º º" v-model="password"
              class="text-white" input-class="text-white" />
          </div>
          <q-btn class="full-width" no-caps color="secondary" label="Fazer Login" />
        </div>
      </div>
    </div>

    <div v-if="$q.screen.width > 768" class="col-md-8 justify-center items-center flex">
      <div class="full-width full-height text-center text-white">
        <q-carousel
          v-model="slide"
          swipeable
          animated
          :control-type="controlType"
          control-color="primary"
          navigation
          padding
          arrows
          height="100%"
          class="text-primary rounded-borders bg-dark"
          autoplay
          interval="3000"
          transition="slide-left"
          infinite
        >
          <q-carousel-slide
            v-for="(item, index) in carouselData"
            :key="index"
            :name="item.name"
            class="column no-wrap flex-center"
          >
            <q-icon :name="item.icon" size="56px" />
            <div class="q-mt-md text-center">
              {{ item.text }}
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Divider from 'components/utils/Divider.vue';
import { carouselData } from 'src/assets/data/carroselLoginData.js';

export default defineComponent({
  name: 'PageLogin',
  components: {
    Divider
  },

  setup () {
    return {
      controlType: ref('flat'),
      slide: ref('style'),
      carouselData,
    }
  }
});
</script>
