<template>
  <div class="sidebar">
    <div class="bar">
      <div>
        <i class="fa fa-th-large fa-lg" aria-hidden="true"></i>
      </div>
      <div>
        <router-link to="/">
          <i class="fa fa-user-o fa-lg" aria-hidden="true"></i>
        </router-link>
      </div>
      <div>
        <i class="fa fa-credit-card fa-lg" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.sidebar {
  width: 4.88vw;
  height: 92.47vh;
  position: fixed;
  background: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.1);
}

.bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 25vh;
  margin: 12vh 0;
}

.fa {
  color: grey;
}

a.router-link-exact-active .fa {
  color: #2bda53;
}

.fa:hover {
  color: #2bda53;
}
</style>