<template>
    <div class="login">
      <!-- Header Section Matching VideoLibrary -->
      <div class="header-section">
        <h1>🌴🌏 Messages from Thaimiano 🌏🌴</h1>
        <p>Please enter the password to access the video library</p>
      </div>
      
      <!-- Password Form -->
      <form @submit.prevent="checkPassword">
        <input 
          type="password" 
          v-model="password" 
          placeholder="Enter password" 
          required 
        />
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Login',
    emits: ['login-success'],
    setup(_, { emit }) {  
        const password = ref('');
        const errorMessage = ref('');
        const correctPassword = 'WatermelonILoveYou'; 

        const checkPassword = () => {
        if (password.value === correctPassword) {
            emit('login-success');
        } else {
            errorMessage.value = 'Incorrect password, please try again.';
        }
        };

        return {
        password,
        errorMessage,
        checkPassword
        };
    }
    });
  </script>
  
  <style scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: rgba(230, 230, 230, 0.6); 
    color: rgb(0, 0, 0);
    padding: 20px;
    border-radius: 10px;
  }
  
  .header-section {
    font-size: 20px;
    padding: 10px 20px 25px 20px;
    margin: 0px 20px 40px 20px;
    border-radius: 20px;
    background-color: rgba(210, 100, 182, .85);
  }
  
  input[type="password"] {
    padding: 10px;
    margin-top: 15px;
    font-size: 16px;
    border-radius: 5px;
    border: 1.5px solid #4b4b4b;
  }
  
  button {
    margin-top: 10px;
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: rgba(210, 100, 182, 1);
    border: none;
    border-radius: 5px;
    transition: rgb(116, 55, 100) 0.2s ease;
  }
  
  button:hover {
    background-color: #367e9b;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>  