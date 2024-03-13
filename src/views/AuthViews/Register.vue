<template>
  <div class="col-lg-8 col-md-10">
    <div class="card shadow-lg bg-gradient-secondary border-0 mb-0">
      <div class="card-body px-lg-5 py-lg-5">
        <!-- <div class="d-flex mb-4 justify-content-center">
          <button
            @click="facebook_login_trigger"
            type="button"
            class="btn btn-facebook btn-icon"
          >
            <span class="btn-inner--icon"
              ><em class="fab fa-facebook"></em
            ></span>
            <span class="btn-inner--text">Facebook</span>
          </button>
          <button
            id="google_login"
            type="button"
            class="btn btn-google-plus btn-icon"
          >
            <span class="btn-inner--icon"><em class="fab fa-google"></em></span>
            <span class="btn-inner--text">Google</span>
          </button>
        </div> -->
        <form ref="form" role="form">
          <div class="row">
            <div class="form-group mb-3 col-md-6">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><em class="ni ni-single-02"></em
                  ></span>
                </div>
                <input
                  class="form-control"
                  placeholder="First Name"
                  v-model="post_data.first_name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div class="form-group mb-3 col-md-6">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><em class="ni ni-single-02"></em
                  ></span>
                </div>
                <input
                  class="form-control"
                  placeholder="Last Name"
                  v-model="post_data.last_name"
                  type="text"
                  required
                />
              </div>
            </div>
            <!-- <div class="form-group mb-3 col-md-6">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><em class="fas fa-male"></em
                    ><em class="ml-1 fas fa-female"></em
                  ></span>
                </div>
                <select name="gender" class="form-control" required  v-model="post_data.gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-3 col-md-6">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <em class="fas fa-birthday-cake"></em>
                  </span>
                </div>
                <input
                  type="date"
                  class="form-control"
                  v-model="post_data.date_of_birth"
                  placeholder="Date of birth"
                  required
                />
              </div>
            </div> -->
            <div class="form-group mb-3 col-md-6">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><em class="ni ni-email-83"></em
                  ></span>
                </div>
                <input
                  class="form-control"
                  placeholder="Email"
                  v-model="post_data.username"
                  type="email"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <phone-input
                :value="phone"
                :errors="errors.phone"
                placeholder="Enter your phone number"
                @type="(val) => (this.phone = val)"
              />
            </div>
            <!-- <div class="form-group mb-3 col-md-12">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><em class="fas fa-location-arrow"></em
                  ></span>
                </div>
                <input
                  class="form-control"
                  placeholder="Address"
                  v-model="post_data.address"
                  type="text"
                  required
                />
              </div>
            </div> -->
            <div class="form-group col-md-6">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><em class="ni ni-lock-circle-open"></em
                  ></span>
                </div>
                <input
                  class="form-control"
                  placeholder="Password"
                  type="password"
                  v-model="post_data.password1"
                  required
                />
              </div>
            </div>
            <div class="form-group col-md-6">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><em class="ni ni-lock-circle-open"></em
                  ></span>
                </div>
                <input
                  class="form-control"
                  placeholder="Confirm Password"
                  type="password"
                  v-model="post_data.password2"
                  required
                />
              </div>
            </div>
          </div>

          <div class="text-center">
            <button
              :disabled="!phone.valid"
              type="button"
              @click="register"
              class="btn btn-lg btn-block btn-default my-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <router-link class="text-dark" to="/"
          ><small>Forgot password?</small></router-link
        >
      </div>
      <div class="col-6 text-right">
        <router-link class="text-dark" to="/login"
          ><small>Already have an account? Sign in</small></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import PhoneInput from "../../components/PhoneInput";
import { FBMIXIN } from "../../socials/FacebookInit";
import { GOOGLEMIXIN } from "../../socials/GoogleInit";
export default {
  name: "Register",
  mixins: [FBMIXIN, GOOGLEMIXIN],
  components: {
    "phone-input": PhoneInput,
  },
  data() {
    return {
      post_data: {
        username: "",
        first_name: "",
        last_name: "",
        // gender: "",
        // date_of_birth: "",
        // address: "",
        phone_number: "",
        password: "",
        password1: "",
        password2: "",
      },
      phone: {},
      errors: {},
    };
  },
  methods: {
    register: function () {
      if (this.phone.valid) {
        this.post_data.phone_number = this.phone.full_format;
        this.post_data.password = this.post_data.password1;
        this.$store.dispatch("register", this.post_data);
      }
    },
    // validate_form: function() {
    //   const form = document.getElementById('form');
    //   form.addEventListener('submit', (e) =>{
    //     e.preventDefault();
    //     if (form.isValid()){
    //       this.register()
    //     }
    //   })
    // }
  },
  created() {
    console.log(this.$refs);
  },
};
</script>

<style>
</style>