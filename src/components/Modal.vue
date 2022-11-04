<!-- eslint-disable vue/no-multiple-template-root -->
<template> 
    <div>
  <b-button v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
  </template>
  
  <script> 
  import { BootstrapVue } from 'bootstrap-vue'

  import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'ModalComponent',
    components:{
      // eslint-disable-next-line vue/no-unused-components
      BootstrapVue
    }, 
  }
  
  </script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap-vue/src/index.scss';

.selector-for-some-widget {
  box-sizing: content-box;
}
</style>