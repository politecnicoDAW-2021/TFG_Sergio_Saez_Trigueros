<template>
  <main>
    <div v-if="alertMsg" class="alert alert-success header" role="alert">
      {{ alertMsg }}
    </div>
    <div class="header">
      <h1>Registered clubs</h1>
      <button
        v-if="isAdmin"
        class="btn btn-success create"
        @click="goToCreate()"
      >
        Create
      </button>
    </div>
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
import { useRoute, useRouter } from "vue-router";
import ClubCard from "../components/ClubCard.vue";

const clubs = ref(null);
const isAdmin = ref(false);
const alertMsg = ref(null);
const router = useRouter();
const route = useRoute();

const goToCreate = () => {
  router.push({
    name: "clubForm",
    params: { id: "" },
  });
};

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  clubService
    .getClubs()
    .then((clubsData) => (clubs.value = clubsData.data.listClubs.items));

  const alert = route.params.msg;
  console.log(alert);
  if (alert) {
    alertMsg.value = alert;
    setInterval(() => {
      alertMsg.value = null;
    }, 3000);
  }
});
</script>

<style>
main {
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.create {
  position: absolute;
  left: 93.5%;
}

.club-wrapper {
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
