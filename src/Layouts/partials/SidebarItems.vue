<template>
  <div>
    <sidebar-item
      id="dashboards"
      iconClass="ni ni-compass-04 text-dark"
      text="Dashboard"
      link="/dashboard"
      :children="[]"
      :isParent="false"
      
    />
    <sidebar-item
      id="Institutions"
      iconClass="ni ni-collection text-dark"
      text="Service"
      link="/institutions"
      :children="[]"
      :isParent="false"
    />
  </div>

  <!-- to check the permission and the role add this rine in the sidebar item attributes -->
  <!-- v-if="$guards.has_perm('store.view_service') && !$guards.is_super_admin()" -->
</template>

<script>
import SideBarItem from "../../components/SidebarItem";

export default {
  components: {
    "sidebar-item": SideBarItem,
  },
};
</script>

<style></style>
