<template>
  <div class="employees">
    <div class="headers">
      <div class="list">
        <input type="checkbox" name="checkone" class="checkone" />
      </div>
      <div class="list">
        <p>FIRST NAME</p>
      </div>
      <div class="list">
        <p>LAST NAME</p>
      </div>
      <div class="list">
        <p>EMAIL</p>
      </div>
      <div class="list">
        <p>PHONE</p>
      </div>
      <div class="list">
        <p>ROLE</p>
      </div>
      <div class="list">
        <p>-</p>
      </div>
    </div>

    <div class="employee-list" v-for="employee in allEmployees" :key="employee._id">
      <div class="list">
        <input type="checkbox" name="checkone" class="checkone" checked />
      </div>
      <div class="list">
        <p>{{ employee.firstName }}</p>
      </div>
      <div class="list">
        <p>{{ employee.lastName }}</p>
      </div>
      <div class="list">
        <p>{{ employee.email }}</p>
      </div>
      <div class="list">
        <p>{{ employee.phone }}</p>
      </div>
      <div class="list">
        <p>{{ employee.role }}</p>
      </div>
      <div class="list" id="delete" @click="deleteEmployee(employee)">
        <p>
          <i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Employees",
  computed: {
    ...mapGetters(["allEmployees"])
  },

  methods: {
    ...mapActions(["fetchEmployees", "deleteEmployees"]),
    deleteEmployee(employee) {
      const employ = employee;
      console.log(employ);

      this.deleteEmployees(employ);
    }
  },
  created() {
    this.fetchEmployees();
  },
  updated() {
    this.fetchEmployees();
  }
};
</script>

<style>
.headers,
.employee-list {
  display: flex;
  justify-content: space-evenly;
  margin: 3.37vh 0;
  align-items: center;
}

.headers p {
  color: #013c61;
}
.employee-list {
  background: #ffffff;
  border-radius: 5px;
  height: 5.7vh;
}

.employee-list p {
  color: #6a7e8a;
}

input {
  width: 1vw;
  height: 1vw;
  border: 1.2px solid rgba(106, 126, 138, 0.4);
  border-radius: 0.5px;
}

.list {
  flex: 1;
  text-align: center;
}

.delete:hover .fa {
  color: red;
}
</style>
