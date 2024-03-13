<template>
  <div class="col-lg-5 col-md-7">
    <div class="card shadow-lg bg-gradient-secondary border-0 mb-0">
      <div class="card-body px-lg-5 py-lg-5">
        <form role="form">
          <div class="form-group mb-3">
            <div class="input-group input-group-merge input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="ni ni-email-83"></i
                ></span>
              </div>
              <input
                class="form-control"
                placeholder="Email"
                v-model="username"
                type="email"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group input-group-merge input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="ni ni-lock-circle-open"></i
                ></span>
              </div>
              <input
                class="form-control"
                placeholder="Password"
                type="password"
                v-model="password"
              />
            </div>
          </div>
          <div class="text-center">
            <button
              type="button"
              @click="login"
              class="btn btn-default my-4"
              :style="!show_loader ? '' : styleObject"
              :disabled="show_loader"
            >
              Sign in
              <i v-if="show_loader" class="fa fa-spinner fa-spin"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row mt-3">
      <!-- <div class="col-6">
        <router-link to="/forgot_password" class="text-dark"
          ><small>Forgot password?</small></router-link
        >
      </div> -->
      <!-- <div class="col-6 text-right">
        <router-link to="/register" class="text-dark"
          ><small>Create new account</small>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      styleObject: {
        cursor: "not-allowed",
      },
      username: "",
      password: "",
      show_loader: false,
    };
  },
  methods: {
    login: function() {
      this.show_loader = true
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      this.show_loader = false
    },
  },
  created() {},
};
</script>

<style></style>
