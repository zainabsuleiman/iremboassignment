<template>
  <nav
    aria-label="nav"
    class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
    id="sidenav-main"
  >
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header d-flex align-items-center">
        <a
          class="navbar-brand d-none"
          href="../../pages/dashboards/dashboard.html"
        >
          <img
            src="../assets/favicon_io/favicon-32x32.png"
            class="navbar-brand-img"
            alt="..."
          />
        </a>
        <div class="ml-auto">
          <!-- Sidenav toggler -->
          <div
            class="sidenav-toggler d-none d-xl-block"
            data-action="sidenav-unpin"
            data-target="#sidenav-main"
          >
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav navbar-dark">
            <slot name="sidebarItems"></slot>
          </ul>

          <!-- Navigation -->
          <ul class="navbar-nav mb-md-3"></ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "sideBar",
};
</script>

<style></style>
