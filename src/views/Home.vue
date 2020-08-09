<template>
  <div class="home">
    <div class="first">
      <p>Employees</p>
      <div>
        <button>Add New</button>
      </div>
    </div>

    <div class="codetails">
      <h3>Brown Table Concepts</h3>
      <p>5, mobolaji bank anthony.</p>
    </div>

    <div class="editors">
      <div class="inputs">
        <select name="Roles" id="roles" placeholder="Change Roles">
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
        </select>
        <button>Change</button>
        <input type="text" name="Name" id="inputName" placeholder="Enter staff name here..." />
      </div>
      <div class="pagination">
        <input type="text" name="page" id="page" placeholder="1" /> of 2
        <i class="fa fa-arrow-circle-left fa-2x" aria-hidden="true"></i>
        <i class="fa fa-arrow-circle-right fa-2x" aria-hidden="true"></i>
      </div>
    </div>

    <Employees />
  </div>
</template>

<script>
import Employees from "@/components/Employees.vue";

export default {
  name: "Home",
  components: {
    Employees
  }
};
</script>

<style scoped>
.home {
  padding: 9.8vh 4.88vw;
  /* width: 100%; */
}

.first {
  display: flex;
  justify-content: space-between;
}

.first > p {
  font-size: 2.6rem;
  font-weight: 500;
}
.first button {
  background: #2bda53;
  box-shadow: 0px 7px 15px rgba(43, 218, 83, 0.2);
  border-radius: 3px;
  width: 11vw;
  height: 4.63vh;
  color: #ffffff;
  margin: 0;
}

.codetails {
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  height: 12vh;
  width: 86.92vw;
  line-height: 12vh;
  padding: 0 2vw;
  margin: 3.37vh 0;
}

.codetails h3 {
  font-size: 3.6rem;
  /* padding: 1vw; */
  font-weight: 500;
}

#inputName:focus {
  border: 1px solid #2bda53;
}

.codetails p {
  font-size: 2.2rem;
}

.editors {
  display: flex;
  justify-content: space-between;
  margin: 3.37vh 0;
}
select {
  height: 4vh;
  width: 8vw;
  margin-right: 1vw;
  font-size: 1.2rem;

  background: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.4);
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 4px;
}

button {
  height: 4vh;
  width: 9vw;
  margin-right: 1vw;
  font-size: 1.2rem;
  background: #2bda53;
  border-radius: 3px;
  color: #ffffff;
}
input {
  height: 4vh;
  width: 16vw;
  font-size: 1.2rem;

  background: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.4);
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 4px;
  color: #6a7e8a;
}

.pagination {
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.pagination input {
  height: 4vh;
  width: 4vh;
  font-size: 1.2rem;

  background: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.4);
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 4px;
}

::placeholder {
  color: rgba(106, 126, 138, 0.4);
}

.fa {
  color: #2bda53;
}
</style>
 