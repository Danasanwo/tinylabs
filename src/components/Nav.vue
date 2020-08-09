<template>
  <div id="nav">
    <div class="logo">
      <img src="../../public/logo.png" alt="logo" />
    </div>
    <div class="user">
      <div class="avi">
        <div class="avatar"></div>
      </div>
      <div class="username">Hi, awilo</div>
      <div class="dropdown">
        <i class="fa fa-caret-down" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
#nav {
  width: 100%;
  height: 7.58vh;
  background: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.1);
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
}

.user {
  display: flex;
  width: 20vw;
  align-items: center;
  justify-content: space-around;
  padding: 0 4.88vw;
}

.avatar {
  background: cornflowerblue;
  border-radius: 50%;
  width: 3.68vh;
  height: 3.68vh;
}

.username {
  font-size: 1.6rem;
  font-weight: 500;
}
</style>
