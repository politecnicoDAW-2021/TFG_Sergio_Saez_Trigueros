<template>
  <main>
    <h1 class="header">Registered clubs</h1>
    <div class="club-wrapper">
      <ClubCard
        v-for="club in clubs"
        :club="club"
        :isAdmin="isAdmin"
      ></ClubCard>
    </div>
  </main>
</template>

<script setup>
import { authService } from "@/services/auth.service";
import { clubService } from "@/services/club.service";
import { onBeforeMount, ref } from "vue";
import ClubCard from "../components/ClubCard.vue";

const clubs = ref();
const isAdmin = ref(false);

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  clubService
    .getClubs()
    .then((clubsData) => (clubs.value = clubsData.data.listClubs.items));
});
</script>

<style>
main {
  display: flex;
  flex-direction: column;
}
.header {
  margin-top: 3rem;
  align-self: center;
}

.club-wrapper {
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
