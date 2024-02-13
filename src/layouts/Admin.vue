<template>
  <div>
    <sidebar /> <!-- this imported side bar sits next to the div that holds all the rest of the content --> 
    <div class="relative md:ml-64 bg-blueGray-100"> <!-- This div holds all the rest of the content for the screen. Sits next to side bar content -->
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view /> <!-- the child URI content -->
        <footer-admin /> <!-- the imported footer at the bottom -->
      </div>
    </div>
  </div>
</template>
<script>
  //import the files for all the "sections" that have the built out global/reusable "controls" that we'll be using in this "harness"
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout", //the name is pretty much what name will be used as the <tag/> if this were used elsewhere 
  components: { //this is a list of all the components/sections that we just imported that we're using here in this harness. The import is for the file and this is pretty much for the html
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
  },
};
</script>
