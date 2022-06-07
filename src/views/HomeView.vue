<script setup lang="ts">
import { clubService } from "@/services/club.service";
import { onBeforeMount, ref } from "vue";
import HelloComponent from "../components/HelloComponent.vue";

const clubs = ref();

function deleteClub() {
  clubService.deleteClub("af1c61f9-80bd-4ae0-b5b3-eadedf4efbb1");
}

function createClub() {
  clubService.createClub("test3", "Huelva", "Juan");
}

function loadClubs() {
  clubService.getClubs().then((clubsData) => {
    clubs.value = clubsData;
    console.log(clubsData);
  });
}

onBeforeMount(() => {
  loadClubs();
});
</script>

<template>
  <main>
    <HelloComponent msg="Welcome to SportEvent" />
    <button @click="loadClubs()">Load clubs</button>
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
