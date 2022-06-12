<script setup lang="ts">
import { RouterView } from "vue-router";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import HomeViewVue from "./views/HomeView.vue";
import ClubFormVue from "./components/ClubForm.vue";
import ClubFormView from "./views/ClubFormView.vue";
import NavBarVue from "./components/NavBar.vue";
import ClubCardVue from "./components/ClubCard.vue";
</script>

<template>
  <authenticator class="auth">
    <template v-slot="{ user }">
      <nav-bar-vue :user="user.attributes.nickname"></nav-bar-vue>
      <RouterView />
    </template>
    <template v-slot:sign-in-header>
      <h3 class="amplify-heading">Sign in to your account</h3>
    </template>
    <template v-slot:sign-up-header>
      <h3 class="amplify-heading">Create a new account</h3>
    </template>
  </authenticator>
</template>

<style>
.amplify-heading {
  padding-left: 2.5rem;
  padding-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.auth {
  margin-top: 3rem;
}
</style>
