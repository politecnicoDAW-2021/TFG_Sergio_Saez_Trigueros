<script setup lang="ts">
import CalendarVue from "@/components/Calendar.vue";
import { onBeforeMount, ref } from "vue";
import { authService } from "../services/auth.service";

let currentUser = ref(null);

onBeforeMount(async () => {
  currentUser.value = await authService.getCurrentUser().then((user) => {
    return user;
  });
  console.log("current user", currentUser.value.attributes);
});
</script>

<template>
  <h1>current user : {{ currentUser.attributes.nickname }}</h1>
  <CalendarVue></CalendarVue>
  <button>
    <router-link to="/">Back to home</router-link>
  </button>
</template>
