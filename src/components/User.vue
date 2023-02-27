<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div id="container" style="margin-left: 100px;">
  <div id="left">
    <img src="/test.png" width="300" height="200" style="padding-bottom: 10px;margin-bottom: 0px;margin-left: 100px;margin-top: 30px;"/>
    <h1 id="welcome" style="font-weight:400;padding-top: 20px;margin-top: 0px">Welcome</h1> 
    <p id="lorem">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
      Vivamus sodales eros non arcu pellentesque convallis.<br>
      Nunc dignissim lectus in malesuada porta.<br>
      Proin ac erat sed urna congue suscipit.<br>
      Morbi aliquet eget nisl id ornare.
    </p>
  </div>
  <div id="right">
    <h1 id="login" style="font-weight: 400;">LogIn</h1><br>
    <input type="email" id="email" class="client-info">
    <label v-modal="username" for="email">Username</label>
    <input v-modal="password" type="password" id="password" class="client-info">
    <label for="password">Password</label>
  
    <input type="submit" id="submit" class="client-info button" value="Submit">
   
  </div>
</div>

</template>

 <script lang="ts"> 

export default {
  name: "UserComponent", 
  props: {
    text: null, 
    // eslint-disable-next-line vue/require-prop-type-constructor
  },
  data() {
    return {
      username: null,
      password: null
    };
  }, 
//   methods: {
//     login() { 
    
//   }
//},  
};
</script>


<style scoped>


:root {
  --main-color: #fff;
  --second-color: #347deb;
  --box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  --facebook-color: rgb(60, 90, 154);
  --google-color: rgb(220, 74, 61);
}

html {
  height: 100%;
} 

#container {
  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--main-color);
  width: 1200px;
  height: 800px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  box-shadow: var(--box-shadow);
  transition-duration: 1s;
}

#left, #right {
  margin: auto;
  width: 100%;
  height: 96%;
  border-radius: 30px;
  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
}

#left { 
  background-size: cover;
  background-position: center;
  box-shadow: var(--box-shadow);
  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
}
#welcome, #lorem {
  margin: 20px;
  text-shadow: var(--box-shadow);
}
#welcome { 
  font-size: 75px;
  font-weight: 300; 
  text-shadow: var(--box-shadow);
}

#login {
  padding-top: 35%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
  text-shadow: var(--box-shadow);
}
.client-info {
  display: block;
  margin: 20px auto;
  width: 60%;
  height: 50px;
  border: solid #999 1px;
  border-radius: 5px;
  text-indent: 15px;
  transition: all 200ms;
  box-shadow: var(--box-shadow);
}
.client-info:focus {
  width: 80%;
}
label {
  position: absolute;
  margin: -76px 130px;
	font-size: 12px;
	white-space: nowrap;
	background: #fff;
	padding: 0 5px;
	color: #999;
  transition: all 200ms;
  text-shadow: var(--box-shadow);
}
#email:focus ~ label[for="email"] {
  margin: -76px 70px;
}
#password:focus ~ label[for="password"] {
  margin: -76px 70px;
}
#submit {
    margin-top: 7%;
  border: none; 
  color: white;
  width: 60%;
  text-align: center;
}
#submit:hover {
  background-color: #df98fa;
}

.social {
  background-color: #fff;
  display: block;
  margin: 10px auto;
  width: 70%;
  height: 50px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  transition-duration: 200ms;
  box-shadow: var(--box-shadow);
  text-shadow: var(--box-shadow);
}
#facebook {
  border: solid var(--facebook-color) 1px;
  color: var(--facebook-color);
}
#facebook:hover {
  background-color: var(--facebook-color);
  color: white;
}
#google {
  border: solid var(--google-color) 1px;
  color: var(--google-color);
}
#google:hover {
  background-color: var(--google-color);
  color: white;
}

@media (max-width: 1250px) {
 
  #container {
    width: 600px;
    display: block;
  }
  #left {
    display: none;
  }
  #right {
    margin-top: 16px;
     background-size: cover;
    background-position: center;
    box-shadow: var(--box-shadow);
  }
  
}

@media (max-height: 850px) {
 
  #container {
    width: 1000px;
    height: 600px;
  }
  #login {
    padding-top: 20%;
  }
  #welcome {
    margin-top: 240px;
    font-size: 60px;
  }
  #lorem {
    font-size: 15px;
  }
  
}


.button { 
  padding-right: 15px;
  border-radius: 23px;
  border: none;
  transition: all 0.3s linear;
  cursor: pointer; 
  font-weight: 700;
  font-size: large;  
  background-color: #42b983; 
  color: white;
}
  .button:hover {
    background-color: #5ecc9a !important; 
  } 
</style>