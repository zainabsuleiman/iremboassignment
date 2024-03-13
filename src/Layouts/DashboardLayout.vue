<template>
  <div>
    <side-bar>
      <template v-slot:sidebarItems>
        <div
          class="font-weight-bolder bg-default text-white mb-5 row p-2"
          id="loggedAs"
        >
          <div class="col-2" id="avatar">
            <span
              class="avatar avatar-sm rounded-circle bg-secondary text-default"
              >W</span
            >
          </div>
          <div class="col-9 mt-1" id="words">
            <!-- <small>{{ names }}</small>
          <br /> -->
            <strong class="text-xs">Waka Attendance</strong>
            <!-- <strong v-if="entity_name">{{ entity_name }}</strong> -->
          </div>
        </div>
        <sidebar-items></sidebar-items>
      </template>
    </side-bar>
    <!-- Main content -->
    <div class="main-content" id="panel">
      <!-- Topnav -->
      <nav
        aria-label="nav"
        class="navbar navbar-top navbar-expand navbar-dark bg-default border-bottom"
      >
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <h2 class="h4 text-white">{{ $route.name }}</h2>
            <!-- Navbar links -->
            <ul
              class="navbar-nav navbar-dark bg-default align-items-center ml-md-auto"
            >
              <li class="nav-item d-xl-none">
                <!-- Sidenav toggler -->
                <!-- <div
                  class="pr-3 sidenav-toggler sidenav-toggler-dark"
                  data-action="sidenav-pin"
                  data-target="#sidenav-main"
                >
                  <div class="sidenav-toggler-inner">
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                  </div>
                </div> -->
              </li>
              <li v-if="false" class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ni ni-bell-55"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden"
                >
                  <!-- Dropdown header -->
                  <div class="px-3 py-3">
                    <h6 class="text-sm text-muted m-0">
                      You have
                      <strong class="text-primary">13</strong> notifications.
                    </h6>
                  </div>
                  <!-- List group -->
                  <div class="list-group list-group-flush">
                    <a href="#!" class="list-group-item list-group-item-action">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <!-- Avatar -->
                          <img
                            alt="Image placeholder"
                            src=""
                            class="avatar rounded-circle"
                          />
                        </div>
                        <div class="col ml--2">
                          <div
                            class="d-flex justify-content-between align-items-center"
                          ></div>
                          <p class="text-sm mb-0">
                            Let's meet at Starbucks at 11:30. Wdyt?
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  >
                </div>
              </li>
            </ul>
            <ul
              class="navbar-nav navbar-dark align-items-center ml-auto ml-md-0"
            >
              <li class="nav-item dropdown">
                <a
                  class="nav-link pr-0"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="media align-items-center">
                    <span
                      class="avatar avatar-sm rounded-circle bg-white text-default"
                    >
                      {{first_name[0]}}
                    </span>
                    <div class="media-body ml-2 d-none d-lg-block">
                      <span class="mb-0 text-sm font-weight-bold">
                        {{ names }}
                      </span>
                    </div>
                  </div>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <div class="dropdown-header noti-title">
                    <h6 class="text-overflow m-0">Welcome! {{name}}</h6>
                  </div>
                  <a href="#!" class="dropdown-item">
                    <i class="ni ni-single-02"></i>
                    <router-link :to="{ name: 'UserProfile' }">
                      <span>My profile</span>
                    </router-link>
                  </a>
                  <a
                    href="javascript:(0)"
                    @click="logout"
                    class="dropdown-item"
                  >
                    <i class="ni ni-user-run"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Page content -->
      <div class="container-fluid mt-3">
        <!-- <div class="header py-0 shadow bg-white mt-3">
          <div class="container-fluid">
            <div class="header-body">
              <div class="row py-3">
                <nav aria-label="breadcrumb" class="ml-2">
                  <ol class="breadcrumb breadcrumb-links">
                    <li class="breadcrumb-item">
                      <a href="#"><i class="fas fa-link"></i></a>
                    </li>
                    <li class="breadcrumb-item"><a href="#"></a></li>
                    {{ $route.path }}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div> -->
        <div class="w-100">
          <router-view v-slot="{ Component }">
            <transition name="slide-fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import SidebarItems from "./partials/SidebarItems";
// import { alert } from "../utils/alertUtils";

export default {
  data() {
    return {
      name: "",
    };
  },
  components: {
    "side-bar": SideBar,
    "sidebar-items": SidebarItems,
  },
  computed: {
    names: function() {
      return this.$store.getters.getNames;
    },
    first_name: function() {
      return this.$store.getters.getFirstName;
    },
    username: function() {
      return this.$store.getters.username;
    },
    // isSuperUser: function () {
    //   return this.$store.getters.getUserProfile.is_superuser;
    // },
    // entity_name: function () {
    //   if (!this.$store.getters.getUserProfile.is_superuser)
    //     return this.$store.getters.getUserProfile.entity.name;
    //   else return "";
    // },
  },
  // onBeforeMount() {
  //   const user = auth.currentUser;
  //   if (user) {
  //     this.name = user.email.split("@")[0];
  //   }
  // },

  methods: {
    logout: function() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style></style>
