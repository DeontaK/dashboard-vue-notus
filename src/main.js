import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app
//import specifically the App.vue file which is used as the starter hub for everything

import App from "@/App.vue";

// layouts

//importing the different "harness" that we use in the app
//the Admin harness will be used as the harness for all the child routes to /admin
//the Auth harness will be used as the harness for all the child routes to /auth

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

//importing specific views ("sections") that are within the Admin "harness" so the Child URIs can know which specific router view/section to show in the changable part of the screen

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

//importing specific views ("sections") that are within the Auth "harness" so the Child URIs can know which specific router view/section to show in the changable part of the screen

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

//these are pretty much sections that aren't using a harness. An example would be like displaying some loose html files

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";

// routes

//creates an object that holds all of the available URI endpoints for this application
const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

//creates the router object that has history functionality and uses the above available routes
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Actually create the app that uses all of the above available URL routes and router functionality such as web history
//App is the App.vue file itself and #app is the id of the html component in the file that is used as "what we actually want to see"
createApp(App).use(router).mount("#app");
