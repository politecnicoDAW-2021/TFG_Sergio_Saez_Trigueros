<script setup lang="ts">
import { listClubs } from "@/graphql/queries";
import { clubService } from "@/services/club.service";
import { API, graphqlOperation } from "aws-amplify";
import { onBeforeMount, ref } from "vue";
import HelloComponent from "../components/HelloComponent.vue";

const clubs = ref();

function deleteClub() {
  clubService.deleteClub("ce68afe4-04e5-47c1-99e0-0098bd6cc139");
}

function createClub() {
  clubService.createClub("test3", "Huelva", "Juan");
}

async function loadClubs() {
  const clubList = await API.graphql(graphqlOperation(listClubs));
  clubs.value = clubList.data.listClubs.items;
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
