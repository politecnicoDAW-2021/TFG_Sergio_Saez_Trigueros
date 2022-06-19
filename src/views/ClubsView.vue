<template>
  <main>
    <DeleteModalVue
      v-if="showModal"
      :title="modalTitle"
      :body="modalBody"
      ref="deleteModal"
      @save="deleteClub()"
      @close="closeModal()"
    ></DeleteModalVue>
    <ClubMembersModalVue
      v-if="showMembers"
      :members="membersToShow"
      @close-members="closeMembers()"
    ></ClubMembersModalVue>
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
    <div class="card-wrapper">
      <ClubCard
        v-for="club in clubs"
        :club="club"
        :isAdmin="isAdmin"
        @open-delete="openModal($event)"
        @open-members-modal="showMembersModal($event)"
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
import DeleteModalVue from "@/components/DeleteModal.vue";
import ClubMembersModalVue from "@/components/ClubMembersModal.vue";

const clubs = ref(null);
const isAdmin = ref(false);
const alertMsg = ref(null);
const deleteModal = ref(null);
const router = useRouter();
const route = useRoute();
const showModal = ref(false);
const showMembers = ref(false);
const modalTitle = ref("");
const modalBody = ref("");
const idToDelete = ref(null);
const membersToShow = ref(null);

const goToCreate = () => {
  router.push({
    name: "clubForm",
    params: { id: "" },
  });
};

const showAlert = () => {
  const alert = route.params.msg;
  if (alert) {
    alertMsg.value = alert;
    setInterval(() => {
      alertMsg.value = null;
    }, 3000);
  }
};

const blockScroll = () => {
  document.getElementsByTagName("body")[0].style = "overflow: hidden";
};

const normalScroll = () => {
  document.getElementsByTagName("body")[0].style = "overflow: auto";
};

const openModal = ($event) => {
  const clubId = $event.clubId;
  idToDelete.value = clubId;
  const clubName = $event.name;
  modalTitle.value = "Delete";
  modalBody.value = `Are you sure to delete ${clubName}`;
  showModal.value = true;
  blockScroll();
};

const showMembersModal = ($event) => {
  membersToShow.value = $event.members.items;
  showMembers.value = true;
  blockScroll();
};

const closeMembers = () => {
  showMembers.value = false;
  normalScroll();
};

const closeModal = () => {
  showModal.value = false;
  normalScroll();
};

const deleteClub = async () => {
  try {
    await clubService.deleteClub(idToDelete.value);
    loadClubs();
    closeModal();
  } catch (error) {}
};

const loadClubs = () => {
  clubService
    .getClubs()
    .then((clubsData) => (clubs.value = clubsData.data.listClubs.items));
};

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  loadClubs();
  showAlert();
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

.card-wrapper {
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
