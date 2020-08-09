<template>
  <div id="app">
    <Nav />

    <div class="view">
      <Sidebar />
      <div class="sidebarrep"></div>
      <!-- this is a hack as the sidebar was malfunctioning after coding -->

      <div class="router">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Nav,
    Sidebar
  }
};
</script>

      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  border: none;
  font-family: "Roboto", sans-serif;
  color: #013c61;
  font-weight: normal;
}

html,
body {
  margin: 0;
  padding: 0;
  font-size: 10px;
  background: #f6f8f8;
}
#app {
  width: 100vw;
}

.view {
  background: #f6f8f8;

  position: absolute;
  top: 7.58vh;
  width: 100%;
  display: flex;
}
.router {
  width: 100%;
}
.sidebarrep {
  width: 4.88vw;
  height: inherit;
  /* position: fixed; */
  /* background: #ffffff; */
  /* border: 1px solid rgba(106, 126, 138, 0.1); */
}
</style>
