<!-- eslint-disable vue/no-multiple-template-root -->
<template> 
<div style="text-align:center;justify-content:center">
    <br/> <br/>  <h1>Users</h1>
    <br/> <br/> <br/>
 
    <button type="button" class="button button--accept" @click="showModal = true">New user</button>
    <button type="button" class="button button--edit">Edit user</button>
    <button type="button" class="button button--cancel">Delete user</button>
 
     <!-- <Modal v-if="showModal"></Modal>     -->

  </div>

  <transition name="fade" appear>
    <div class="modal-overlay" 
         v-if="showModal" 
          ></div>
  </transition>
  <transition name="pop" appear>
    <div class="modal" 
         role="dialog" 
         v-if="showModal">
         <a @click="showModal = false" class="modal-exit">x</a>

      <h1>Insert a new user</h1>
      <hr/>
      <br/>   <br/> 
      <div class="content-modal">
      <div class="row">
      <div style="justify-content:center">
       Name:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input class="input-modal" type="text" placeholder="Your name">
      </div>
      <br/>
      <div style="justify-content:center">
       Email:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input class="input-modal" type="email" placeholder="Your email">
      </div>
      <br/>
      <div style="justify-content:center">
       Age:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input class="input-modal" type="number" placeholder="Your age">
      </div>
      <br/>
      <div style="justify-content:center">
       Number:  &nbsp;&nbsp;
       <input class="input-modal" type="number" placeholder="Your number">
      </div>
    </div>
  </div>
      <br/><br/> 
      <div style="display:flex; justify-content:center;text-align:center;">
      <button type="button" class="button button--accept" @click="showModal = false">Aceptar</button>
      <button type="button" class="button button--cancel" @click="showModal = false">Cancelar</button>
    </div>
  </div>
  </transition> 
     
</template>

<script> 
//import { Modal } from "./components/Modal.vue";
 

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
      showModal: false
    }
  },
  methods:{ 
  }
}

</script>



<style lang="scss">

.button {
  margin: 0 15px;
  padding: 15px 0;
  min-width: 120px;
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
  



.button {  
  cursor: pointer;
}

.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: 40%;
  height: fit-content;
  max-width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #FFF;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

.modal-exit{
  font-size:25px;
  padding-left: 85%;
  padding-top:0px;
  margin-top:0px;
  cursor: pointer;
  color: gray;
}

.content-modal{
  align-content: center;
  text-align: center;
  justify-content: center;
background-color: rgb(243, 242, 242);
padding-top: 8%;
padding-bottom: 8%;
border-radius: 1rem;
margin-left: 5%;
margin-right: 5%;
}

/* ---------------------------------- */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

 
.input-modal{
    width:50%; 
    padding: 1.5%;
    border:1px solid rgb(225, 225, 225);
    border-radius:10px; 
    outline:none;
    box-sizing:border-box;
    transition:.3s;
  }
  
.input-modal:focus{
    border-color:#5C8F22;
    box-shadow:0 0 8px 0 #5C8F22; 
  }
</style>