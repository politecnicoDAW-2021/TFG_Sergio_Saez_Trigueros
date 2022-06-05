<script setup lang="ts">
import { RouterView } from "vue-router";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import HomeViewVue from "./views/HomeView.vue";
import HelloComponentVue from "./components/HelloComponent.vue";
import CalendarViewVue from "./views/CalendarView.vue";
import CalendarVue from "./components/Calendar.vue";
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.attributes.nickname }}!</h1>
      <button @click="signOut">Sign Out</button>
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
</style>
