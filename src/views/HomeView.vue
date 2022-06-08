<script setup lang="ts">
import { authService } from "@/services/auth.service";
import { clubService } from "@/services/club.service";
import { onBeforeMount, ref } from "vue";
import HelloComponent from "../components/HelloComponent.vue";

const clubs = ref();

function deleteClub() {
  clubService.deleteClub("ce68afe4-04e5-47c1-99e0-0098bd6cc139");
}

function createClub() {
  clubService.createClub("test3", "Huelva", "Juan");
}

onBeforeMount(async () => {
  clubService
    .getClubs()
    .then((clubsData) => (clubs.value = clubsData.data.listClubs.items));
});
</script>

<template>
  <main>
    <HelloComponent msg="Welcome to SportEvent" />
    <button>Load clubs</button>
    <button @click="deleteClub()">Delete first</button>
    <button @click="createClub()">create club</button>
    <div v-for="club in clubs">
      <h3>Name: {{ club.name }}</h3>
      <p>{{ club }}</p>
    </div>
    <button>
      <router-link to="/calendar">Go to calendar</router-link>
    </button>
  </main>
</template>
