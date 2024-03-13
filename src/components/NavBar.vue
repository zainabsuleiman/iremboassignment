<template>
  <!-- <div class="bg-white shadow-lg"> -->
    <nav class="navbar navbar-horizontal navbar-main navbar-expand-lg navbar-light mb-3 p-1 pb-0">
      <div class="container">
        <slot name="before-brand" />
        <slot name="nav-brand"></slot>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"
            ></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="float-right collapse-close">
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <ul class="navbar-nav mr-auto mb-auto ml-auto">
            <slot name="nav-items"></slot>
          </ul>
          <ul class="navbar-nav ml-lg-auto">
            <slot name="nav-left-items"></slot>
          </ul>
          <slot name="left-items"></slot>
        </div>
      </div>
    </nav>
  <!-- </div> -->
</template>

<script>
export default {
  name: "navbar",
  props: ["navbrand", "navClasses"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='css' scoped>
/* .fa-2x {
  font-size: 1.5em;
}
.nav-brand {
  margin-left: 30px;
}
@media (max-width: 768px) {
  .nav-brand {
    margin-left: 20px;
  }
}
.navbar {
  height: 55px;
    padding: 0rem 1rem !important;
  /* border-bottom: 1px solid #ddd; */
/* } */
</style>