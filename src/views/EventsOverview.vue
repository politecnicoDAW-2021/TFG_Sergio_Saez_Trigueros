<template>
  <DeleteModalVue
    v-if="showModal"
    :title="modalTitle"
    :body="modalBody"
    ref="deleteModal"
    @save="deleteEvent()"
    @close="closeModal()"
  ></DeleteModalVue>
  <club-members-modal-vue v-if="showMembers"></club-members-modal-vue>
  <div v-if="alertMsg" class="alert alert-success header" role="alert">
    {{ alertMsg }}
  </div>
  <h1 class="header">Events</h1>
  <events-table-vue
    v-if="isAdmin"
    style="margin: 0 auto"
    :events="events"
    @open-delete="openModal($event)"
  ></events-table-vue>
</template>

<script setup>
import EventsTableVue from "@/components/EventsTable.vue";
import DeleteModalVue from "@/components/DeleteModal.vue";
import ClubMembersModalVue from "@/components/ClubMembersModal.vue";
import { authService } from "@/services/auth.service";
import { eventService } from "@/services/event.service";
import { nextTick, onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const events = ref(null);
const isAdmin = ref(false);
const route = useRoute();
const alertMsg = ref(null);
const idToDelete = ref(null);
const modalTitle = ref("");
const modalBody = ref("");
const showModal = ref(false);
const router = useRouter();

const loadEvents = () => {
  eventService
    .getEvents()
    .then((eventsData) => (events.value = eventsData.data.listEvents.items));
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

const openModal = ($event) => {
  const eventId = $event.eventId;
  idToDelete.value = eventId;
  const memberName = $event.name;
  modalTitle.value = "Delete";
  modalBody.value = `Are you sure to delete ${memberName}`;
  showModal.value = true;
  document.getElementsByTagName("body")[0].style = "overflow: hidden";
};

const closeModal = () => {
  showModal.value = false;
  document.getElementsByTagName("body")[0].style = "overflow: auto";
};

const forceRerender = () => {
  router.go();
};

const reRenderTable = () => {
  isAdmin.value = false;
  nextTick(() => {
    isAdmin.value = true;
  });
};

const deleteEvent = async () => {
  try {
    await eventService.deleteEvent(idToDelete.value);
    forceRerender();
    closeModal();
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  loadEvents();
  showAlert();
  reRenderTable();
});
</script>
