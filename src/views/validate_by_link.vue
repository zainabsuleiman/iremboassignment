<template>
  <div class="container w-100 justify-content-center">
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="card card-shadow-lg p-2 mb-3 shadow--hover cart-card">
          <div style="margin-top: 30vh card-body" v-if="isLoading">
            <p class="text-default opacity-7 text-center mb--6 display-4">
              Loading, please wait ...
            </p>
            <img
              class="img-center"
              style="height: 30vh"
              src="../assets/images/load.gif"
              alt=""
              srcset=""
            />
          </div>

          <div class="card-body" v-if="!isLoading">
            <h1 class="text-center">
              <span
                v-if="success_indicator"
                class="fa fa-check-circle fa-4x text-success"
              ></span>
              <span v-else class="fa fa-close fa-4x text-danger"></span>
            </h1>
            <h3 class="text-success text-center" v-if="success_indicator">
              ATTENDANCE IS VALIDATED SUCCESSFULLY
            </h3>
            <h3 class="text-danger text-center" v-else>{{ message }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { alert } from "../utils/alertUtils";

export default {
  name: "ValidateSuccess",
  components: {
    // "order-component": OrderComponent,
  },
  data() {
    return {
      success_indicator: false,
      payment: "",
      message: "",
      isLoading: false,
      order: {
        order_items: [],
      },
      backend_url: process.env.VUE_APP_BACKEND_URL,
    };
  },
  methods: {
    update_status: function() {
      this.isLoading = true;
      axios
        .put(
          `${process.env.VUE_APP_BACKEND_URL}/entries/${this.$route.params.otp}/validate/entry`,
          {},
          {
            headers: {
              Authorization: "Bearer " + this.$store.getters.getToken,
              "content-type": "application/json",
            },
          }
        )
        .then((res) => {
          this.isLoading = false;
          console.log(res);
          if (res.status === 400) {
            this.success_indicator = false;
            this.message = res.data;
          } else {
            this.success_indicator = true;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.success_indicator = false;
          if (err.response.status === 400) {
            this.message = "OTP already used";
          } else {
            alert.error("An Error occured, Please try again!");
          }
        });
    },
  },
  created() {
    this.update_status();
  },
};
</script>
<style></style>
