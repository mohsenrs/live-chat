<template>
  <div class="welcome container">
    <p>welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm />
      <p>
        No account yet?
        <span @click="showLogin = false">Signup</span>
        then!
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm />
      <p>
        Already registered?
        <span @click="showLogin = true">Login</span> then!
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { ref } from "vue";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);

    return { showLogin };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome button {
  margin: 20px auto;
}
.welcome span {
  color: blue;
  cursor: pointer;
  font-weight: bold;
}
</style>
