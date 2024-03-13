<template>
  <div class="col-lg-5 col-md-7">
    <div class="card shadow-lg bg-gradient-secondary border-0 mb-0">
      <div class="card-body px-lg-5 py-lg-5">
        <text-input
          @type="(val) => (password = val)"
          label="Password"
          placeholder="Enter your new password"
          is_password="true"
        ></text-input>
        <text-input
          @type="(val) => (confirm_password = val)"
          label="Confirm Password"
          placeholder="Re-enter your Password"
          is_password="true"
        ></text-input>
        <div class="text-center">
          <button @click="set_password" class="btn btn-default">
            Set password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextInput from "../../components/TextInput";
import axios from "axios";
import { alert } from "../../utils/alertUtils";

export default {
  name: "Set Password",
  components: {
    "text-input": TextInput,
  },
  data() {
    return {
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    set_password: function() {
      axios
        .put(
          `${process.env.VUE_APP_BACKEND_URL}/users/${this.$store.getters.getUserId}/change_password/`,
          {
            password: this.password,
            confirm_password: this.confirm_password,
          }
        )
        .then((res) => {
          if (res.data.role === "Front-Desk") {
            this.$router.push({
              name: "Branch Switch",
              params: { id: res.data.id },
            });
          }else{
            this.$router.push("/dashboard");
          }
        })
        .catch((err) => {
          alert.error(err.response.data);
          console.error(err);
        });
    },
  },
};
</script>

<style></style>
