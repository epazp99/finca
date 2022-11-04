<!-- eslint-disable vue/no-multiple-template-root -->
<template> 
<div style="text-align:center">
    <br/> <br/>  <h1>Users</h1>
    <br/> <br/> <br/>
 
    <button type="button" class="button button--accept" v-on:click="showModal()">New user</button>
    <button type="button" class="button button--edit">Edit user</button>
    <button type="button" class="button button--cancel">Delete user</button>

    <div v-if="show">NEWWWWWWWWWWWW</div>
     <!-- <Modal v-if="show"></Modal> -->
    </div>
</template>

<script> 
//import { Modal } from './components/Modal.vue'

export default {
  name: 'UserComponent',
  components: {
    // eslint-disable-next-line vue/no-unused-components
   // Modal,  
  },
  props:{
      text: null,
      // eslint-disable-next-line vue/require-prop-type-constructor 
  }, 
  data(){
    return{
      show: null
    }
  },
  methods:{
    showModal(){
// eslint-disable-next-line vue/no-mutating-props
     this.show = "g";
    }
  }
}

</script>

<style lang="scss">

.button {
  margin: 0 15px;
  padding: 15px 0;
  min-width: 150px;
  border-radius: 30px;
  border: none;
  transition: all 0.3s linear;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: .2em;
}

.button--accept {
  background-color: lighten(#5C8F22, 25);
  
  &:hover {
    background-color: lighten(#5C8F22, 10);
  }
}


.button--cancel {
  background-color: lighten(#EB5E30, 10);
  
  &:hover {
    background-color: #EB5E30;
  }
}

.button--edit {
  background-color: lighten(#3f38cb, 10);
  
  &:hover {
    background-color: #5268a6;
  }
}

</style>