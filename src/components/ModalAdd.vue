<!-- eslint-disable vue/no-multiple-template-root -->
<template>  
 <button type="button" class="button button--accept" @click="showModal = true">
  <p>Nuevo</p>&nbsp;&nbsp;
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-plus-circle"  viewBox="0 0 16 16">
   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
   <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>
</button> 

  <transition name="fade" appear>
    <div class="modal-overlay" 
         v-if="showModal" 
          ></div>
  </transition>
  <transition name="pop" appear>
    <div class="modal" 
         role="dialog" 
         v-if="showModal">
         <a @click="cleanForm()" class="modal-exit">x</a>

      <h2>{{title}}</h2>
      <br/>  
      <hr/>
      <br/>   <br/> 
      <div class="content-modal">
        <form method="POST" name="sentMessage" id="contactForm" @submit="sendForm()" action="https://vuejs.org/" validate="novalidate">
      <div class="row">
      <div v-for="item in list" :key="item">
       {{item.name}}: 
       <input class="input-modal" :ref="item.name" style="margin-left:5%" :type="item.type" :placeholder="item.name" required="required" :data-validation-required-message="'Please enter'+item.name">
       <br/><br/>
      </div> 
    </div>
    </form>
  </div>
  <p v-if="errors.length">
    <br/>
     <b style="color:#EB5E30">Debe llenar todos los campos</b>
    <ul> 
      <!-- <li v-for="error in errors">{{ error }}</li> -->
    </ul>
  </p>
      <br/><br/> 
      <div style="display:flex; justify-content:center;text-align:center;">
      <button type="button" class="button button--accept" @click="sendForm()">Aceptar</button>
      <button type="button" class="button button--cancel" @click="cleanForm()">Cancelar</button>
    </div>
 
  </div>
  </transition> 
     
</template>

<script> 

export default {
  name: "ModalAddComponent", 
  props: {
    text: null,
    title: String,
    list: Array
    // eslint-disable-next-line vue/require-prop-type-constructor
  },
  data() {
    return {
      showModal: false,
      errors: [], 
    };
  },
  emits: ['update'],
  methods: {
    sendForm() { 
    this.list.forEach(element =>{ 
      if(this.$refs[element.name][0].value == ''||this.$refs[element.name][0].value == null)
      this.errors.push("campo obligatorio");
    }) 
   
    var tempcont = 0;
    this.list.forEach(element =>{  
      if(this.$refs[element.name][0].value != ''&&this.$refs[element.name][0].value!= null)
      tempcont ++;
    }) 
 
    if (tempcont==this.list.length) {
     this.insert();
    }
    }, 
    insert: async function() {
      let data = {};

      this.list.forEach((element, index) =>{    
      data[element.realName] = this.$refs[element.name][0].value;
      }) 
 
      const url = await fetch(`http://localhost:9707/apis/animals/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      this.showModal = false; 
      this.errors = [];
 
     this.$emit("update")

    }, 
    cleanForm() {
      this.showModal = false; 
      this.errors = [];
    },
  }, 
};
</script>



<style lang="scss">
.button {
  margin: 0 15px;
  padding: 15px 0;
  min-width: 120px;
  border-radius: 23px;
  border: none;
  transition: all 0.3s linear;
  cursor: pointer; 
  font-weight: 700;
  font-size: medium; 
  display: flex;
  justify-content: center;
}

.button--accept {
  background-color: #42b983;//lighten(#5c8f22, 25);
  color: white;

  &:hover {
    background-color: #5ecc9a !important;//lighten(#5c8f22, 10);
  }
}
 
.button--cancel {
  background-color: lighten(#eb5e30, 10);
  color: white;
  &:hover {
    background-color: #eb5e30;
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
  background: #fff;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
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

.modal-exit {
  font-size: 25px;
  padding-left: 85%;
  padding-top: 0px;
  margin-top: 0px;
  cursor: pointer;
  color: gray;
}

.content-modal {
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
  transition: opacity 0.4s linear;
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

.input-modal {
  width: 50%;
  padding: 1.5%;
  border: 1px solid rgb(225, 225, 225);
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
}

.input-modal:focus {
  border-color: #5c8f22;
  box-shadow: 0 0 8px 0 #5c8f22;
}
</style>