<template>
  <div class="login">
    <Logger />
  </div>
</template>

<script>
import Logger from "@/components/Logger.vue";
export default {
  name: "Login",
  components: {
    Logger
  }
};
</script>


<style>
.login {
  /* height: 100vh; */
}
.container {
  width: 55vw;
  margin: auto;
}

.login-box {
  width: 35vw;
  height: 53.7vh;
  margin: auto;
}
</style>
