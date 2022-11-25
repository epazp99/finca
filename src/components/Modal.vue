<!-- eslint-disable vue/no-multiple-template-root -->
 <template> 
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
      <br/><br/>
      <form method="POST" name="sentMessage" id="contactForm">
      <div class="row">
    
      <div style="justify-content:center">
       Name:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input class="input-modal" type="text" placeholder="Your name" required="required" data-validation-required-message="Please enter your name">
      </div>
      <br/>
      <div style="justify-content:center">
       Email:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input class="input-modal" type="email" placeholder="Your email" required="required" data-validation-required-message="Please enter your email">
      </div>
      <br/>
      <div style="justify-content:center">
       Age:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <input class="input-modal" type="number" placeholder="Your age" required="required" data-validation-required-message="Please enter your age">
      </div>
      <br/>
      <div style="justify-content:center">
       Number:  &nbsp;&nbsp;
       <input class="input-modal" type="number" placeholder="Your number" required="required" data-validation-required-message="Please enter your number">
      </div>
      
    </div>
      <br/><br/><br/>
      <div style="display:flex; justify-content:center">
      <button type="button" class="button button--accept" @click="enviarFormulario()">Aceptar</button>
      <button type="button" class="button button--cancel" @click="enviarFormulario()">Cancelar</button>
    </div>
  </form>
  </div>
  </transition>
  </template>
  
  <script>  

  export default {
    name: 'ModalComponent',
    data(){
      return{ 
      }
    },
    methods:{
      enviarFormulario() {
        this.showModal = false;
        console.log("dddd")
      }
    } 
  }
  
  </script>
 
<style lang="scss">


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
    border:1px solid #aaa;
    border-radius:10px; 
    outline:none;
    box-sizing:border-box;
    transition:.3s;
  }
  
.input-modal:focus{
    border-color:dodgerBlue;
    box-shadow:0 0 8px 0 dodgerBlue; 
  }
</style>