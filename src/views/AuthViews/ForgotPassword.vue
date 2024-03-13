<template>
  <div class="col-lg-5 col-md-7">
    <div class="card shadow-lg bg-gradient-secondary border-0 mb-0">
      <div class="h4 px-lg-5 p-2 pt-lg-4 pt-2">Forgot password?</div>
      <div class="card-body px-lg-5">
        <text-input
          value=""
          :errors="errors.email"
          label="Enter Your Email:"
          placeholder="Enter Your Email"
          @type="(v) => (email = v)"
          :is_password="false"
        ></text-input>
        <button @click="submit" class="btn btn-block btn-default">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "../../components/TextInput";
import axios from "axios";
import { alert } from "../../utils/alertUtils";
export default {
  name: "Forgot Password",
  components: {
    "text-input": TextInput,
  },
  data() {
    return {
      email: "",
      errors: {},
    };
  },
  methods: {
    submit: function () {
      axios
        .post(`${process.env.VUE_APP_BACKEND_URL}/api/forgot_password/`, {
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          alert.success_center(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
</style>