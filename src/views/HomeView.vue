<template>
  <main>
    <div v-for="club in clubs">
      <h3>Name: {{ club.name }}</h3>
      <p>{{ club }}</p>
    </div>
  </main>
</template>

<script setup>
import { authService } from "@/services/auth.service";
import { clubService } from "@/services/club.service";
import { onBeforeMount, ref } from "vue";

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
