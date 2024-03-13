<template>
  <!-- Navbar -->
  <div>
  <nav
    id="navbar-main"
    class="navbar navbar-horizontal navbar-main navbar-expand-lg navbar-light"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          style="height: 45px;"
          class="ml-2"
          src="../../public/assets/images/rwandaful_launch_logo.png"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-collapse"
        aria-controls="navbar-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        v-if="$route.path !== '/entities/registration'"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbar-collapse navbar-custom-collapse collapse"
        id="navbar-collapse"
      >
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="/">
                <img
          style="height: 45px;"
          class="ml-2"
          src="../../public/assets/images/rwandaful_launch_logo.png"
        />
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul
          v-if="$route.path !== '/entities/registration'"
          class="navbar-nav ml-auto"
        >
          <!-- <li class="nav-item">
            <router-link to="/" class="nav-link">
              <span class="nav-link-inner--text">Login</span>
            </router-link>
          </li> -->
          <!-- <li class="nav-item">
            <router-link to="/register" class="nav-link">
              <span class="nav-link-inner--text">Register</span>
            </router-link>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
  <!-- Main content -->
  <div class="main-content">
    <!-- Header -->
    <div class="header bg-default pt-3 pb-6 pt-lg-6">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5 mt-4">
              <h1
                v-if="$route.path !== '/entities/registration'"
                class="text-white"
              >
                Welcome!
              </h1>
              <h1
                v-if="$route.path === '/entities/registration'"
                class="text-white"
              >
                Register your Business here!
              </h1>
              <p
                v-if="$route.path === '/entities/registration'"
                class="text-white-50"
              >
                Please fill this form!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator h-100vh separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--9 pb-5">
      <div class="row justify-content-center">
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
export default {
  components: {
  },
  created() {
    document.body.classList.add("bg-white");
  },
};
</script>

<style>
</style>