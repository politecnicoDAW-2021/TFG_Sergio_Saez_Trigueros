<script setup lang="ts">
import { Clubs } from "@/models";
import { clubService } from "@/services/club.service";
import { onBeforeMount, ref } from "vue";
import HelloComponent from "../components/HelloComponent.vue";

const clubs = ref();

function deleteClub() {
  clubService.deleteClub("a3673469-87aa-4d4a-b2e1-d750aca66d92");
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
