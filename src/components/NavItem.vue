<template>
  <div>
    <li class="nav-item">
      <router-link class="nav-link" :to="link">{{name}}</router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "navItem",
  props: ["name", "link"]
};
</script>

<style>
</style>