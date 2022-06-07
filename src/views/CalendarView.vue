<script setup lang="ts">
import CalendarVue from "@/components/Calendar.vue";
import { onBeforeMount, ref } from "vue";
import { authService } from "../services/auth.service";

let currentUser = ref(null);

onBeforeMount(async () => {
  const id = await authService.getCurrentUserId();
  console.log("id", id);
});
</script>

<template>
  <h1>current user : {{ currentUser }}</h1>
  <CalendarVue></CalendarVue>
  <button>
    <router-link to="/">Back to home</router-link>
  </button>
</template>
