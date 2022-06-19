<template>
  <DeleteModalVue
    v-if="showModal"
    :title="modalTitle"
    :body="modalBody"
    ref="deleteModal"
    @save="deleteMember()"
    @close="closeModal()"
  ></DeleteModalVue>
  <div v-if="alertMsg" class="alert alert-success header" role="alert">
    {{ alertMsg }}
  </div>
  <h1 class="header">Associated Members</h1>
  <members-table-vue
    v-if="isAdmin"
    @open-delete="openModal($event)"
    class="members-table mt-5"
  ></members-table-vue>
</template>

<script setup>
import MembersTableVue from "@/components/MembersTable.vue";
import DeleteModalVue from "@/components/DeleteModal.vue";
import { memberService } from "@/services/member.service";
import { nextTick, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { authService } from "@/services/auth.service";

const isAdmin = ref(false);
const alertMsg = ref(null);
const deleteModal = ref(null);
const route = useRoute();
const showModal = ref(false);
const modalTitle = ref("");
const modalBody = ref("");
const idToDelete = ref(null);

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
  const memberId = $event.memberId;
  idToDelete.value = memberId;
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
  isAdmin.value = false;
  nextTick(() => {
    isAdmin.value = true;
  });
};

const deleteMember = async () => {
  try {
    await memberService.deleteMember(idToDelete.value);
    forceRerender();
    closeModal();
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  showAlert();
});
</script>

<style>
.members-table {
  height: fit-content;
  margin: 0 auto;
}
</style>
