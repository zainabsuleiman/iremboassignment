<template>
  <div class="w-100">
    <nav-bar navClasses="p-0">
      <template v-slot:nav-brand>
        <router-link class="navbar-brand" to="/">
          <img
            id="newfacelogo"
            class="ml-2"
            src="https://firebasestorage.googleapis.com/v0/b/kene-6c09d.appspot.com/o/bfw_ecommerce%2FNFNV_Logo.png?alt=media&token=fef9cb06-6210-4e9f-8ca4-39994a0c3f50"
          />
          <img
            id="unlogo"
            src="https://images.squarespace-cdn.com/content/v1/5ba58feda0cd27664cbb063b/1552322954526-SHE256UZLXVBFIRC5YFB/ke17ZwdGBToddI8pDm48kE2aShZAIqeDk1mFyLK77JdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz1q9VZgZYcuidNfvNhNTSl71Lde7-YryuHnfJiHBXf5tkis02UGMlf0FqiE8s0sBs/unwomen.png"
          />
        </router-link>
      </template>
      <template v-slot:nav-items class="mb-2">
        <Search />
      </template>
      <template v-slot:nav-left-items>
        <li class="nav-item" v-if="$store.getters.isLoggedIn">
          <router-link class="nav-link pr-0 mt-1" to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>bag-09</title>
              <g
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="2"
                fill="#111111"
                stroke="#111111"
              >
                <polygon
                  fill="none"
                  stroke="#111111"
                  stroke-miterlimit="10"
                  points="22,23 2,23 4,7 20,7 "
                ></polygon>
                <path
                  fill="none"
                  stroke-miterlimit="10"
                  d="M8,10V5 c0-2.2,1.8-4,4-4h0c2.2,0,4,1.8,4,4v5"
                ></path>
              </g>
            </svg>
            <span
              class="badge badge-sm badge-circle badge-floating badge-danger border-info ml--2 mt--2 mr-2"
              >{{ cart_count }}</span
            >
          </router-link>
        </li>
        <nav-item
          v-if="$route.path !== '/login' && !$store.getters.isLoggedIn"
          name="login"
          link="/login"
        />
        <nav-item
          v-if="$route.path !== '/signup' && !$store.getters.isLoggedIn"
          name="register"
          link="/register"
        />
        <li class="nav-item dropdown" v-if="$store.getters.isLoggedIn">
          <a
            class="nav-link pr-0"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                {{ names[0] }}
              </span>
              <div class="media-body ml-2 d-none d-lg-block">
                <span class="mb-0 text-sm font-weight-bold">{{ names }}</span>
              </div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-header noti-title">
              <h6 class="text-overflow m-0">Welcome!</h6>
            </div>
            <a href="#!" class="dropdown-item" v-if="!is_customer">
              <i class="ni ni-single-02"></i>
              <router-link :to="{ name: 'UserProfile' }">
                <span>My profile</span>
              </router-link> </a
            ><router-link to="/customer/orders/inprogress/">
              <a href="#!" class="dropdown-item" v-if="is_customer">
                <i class="ni ni-settings"></i>
                <span class="text-default">My Account</span>
              </a></router-link
            >
            <a href="javascript:(0)" @click="logout" class="dropdown-item">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </a>
          </div>
        </li>
      </template>
    </nav-bar>
    <!-- test the search component -->
    <div class="text-center mt-3 mb-3 d-md-none d-lg-none d-sm-block">
      <Search />
    </div>
    <div
      v-if="$route.path === '/home2'"
      class="container text-center mt-4 mb-3"
    >
      <categories-nav />
    </div>
    <div class="w-100">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <div class="mb-6"></div>
    <!-- <div class="mt-5"></div>
        <DetailCard />
    <div class="mt-5"></div>-->
    <!-- <SmallerImg/> -->

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from "../components/Carousel";
import SlideItem from "../components/SlideItem";
import NavBar from "../components/NavBar";
import NavItem from "../components/NavItem";
// import Industry from '../components/Industry'
// import IndustryComponent from "../components/IndustryComponent";
import CategoriesNav from "../components/CategoriesNav";
import { io } from "socket.io-client";

export default {
  name: "Home",
  components: {
    // Industry,
    // test,
    "nav-bar": NavBar,
    "nav-item": NavItem,
    Carousel,
    "card-category": SlideItem,
    ProductCard,
    "categories-nav": CategoriesNav,
  },
  computed: {
    names: function () {
      return this.$store.getters.getFirstName;
    },
    is_customer: function () {
      if (this.$store.getters.isLoggedIn)
        if (this.$store.getters.getUserProfile.referenceName === "CUSTOMER")
          return true;
      return false;
    },
    cart_count: function () {
      return this.$store.getters.get_cart_count;
    },
  },
  data() {
    return {};
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout");
    },
  },
  created() {
    const socket = io(`${process.env.VUE_APP_SOCKET_SERVER_URL}`);
    socket.on("cart_update", (data) => {
      const th = this;
      setTimeout(function () {
        if (th.$store.getters.getUserProfile.referenceName === "CUSTOMER") {
          if (
            th.$store.getters.getUserProfile.customer.uuid ===
            data["customer_uuid"]
          ) {
            console.log("ready to dispacth");
            th.$store.dispatch("update_cart_count", data["count"]);
          }
        }
      }, 2000);
    });
  },
};
</script>

<style lang="css" scoped>
@media (max-width: 768px) {
  #newfacelogo {
    height: 25px;
  }
  #unlogo {
    height: 25px;
  }
}
@media (min-width: 768px) {
  #newfacelogo {
    height: 40px;
  }
  #unlogo {
    height: 40px;
  }
}
</style>