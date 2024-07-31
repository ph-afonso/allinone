<template>
    <div class="divider">
      <span :class="['divider-line', classLine]"></span>
      <span class="divider-text">{{ text }}</span>
      <span :class="['divider-line', classLine]"></span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Divider',
    props: {
      classLine: {
        type: String,
        default: 'bg-grey-6' // Classe padrão da linha
      },
      text: {
        type: String,
        default: 'ou' // Texto padrão
      }
    }
  }
  </script>
  
  <style scoped>
  .divider {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
  }
  
  .divider-line {
    flex-grow: 1;
    height: 1px;
    margin: 0 5px; /* Espaço ao redor do texto */
  }
  
  .divider-text {
    padding: 0 5px;
    font-weight: bold;
    color: #FFF; /* Cor do texto */
  }
  </style>
  