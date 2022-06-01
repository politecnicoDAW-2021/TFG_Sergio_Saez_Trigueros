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
    <template #sign-in-header>
      <h2>Sign in to your SportEvent</h2>
    </template>
  </authenticator>
</template>

<style></style>
