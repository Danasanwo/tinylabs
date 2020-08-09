<template>
  <div class="logger">
    <div class="login-image">
      <img src="../../public/who.jpg" alt="design" />
    </div>
    <div class="container">
      <h1>Create your accont</h1>
      <p>Already registered? Sign in</p>

      <div class="login-box">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />

        <label for="LastName">Last Name</label>
        <input type="text" name="LastName" id="lastName" />

        <label for="email">email</label>
        <input type="email" name="email" id="email" />

        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logger"
};
</script>

<style>
.logger {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}

.login-image {
  width: 45vw;
  height: inherit;
}
.login-image img {
  width: inherit;
  height: inherit;
}

.container {
  width: 55vw;
  /* height: 40vw; */
  margin: auto;
  padding: 0 7.5vw;
}
.login-box {
  width: 40vw;
  height: 40vw;
}
.login-box input {
  width: 13vw;
  border: 1px solid black;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  outline: none;
}
</style>