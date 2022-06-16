<template>
  <div class="card mb-3" style="min-width: 30%">
    <div class="card-header bg-info">
      <h3>{{ club.name }}</h3>
    </div>
    <div
      class="card-body"
      style="background-color: var(--amplify-colors-brand-primary-10)"
    >
      <h4 class="card-title">{{ club.city }}</h4>
      <p class="card-text">
        <label>Phone/Email:</label> {{ club.email }} - {{ club.phone }}
      </p>
      <p v-if="club.address" class="card-text">
        <label>Address:</label> {{ club.address }}
      </p>
      <p v-if="club.website" class="card-text">
        <label>Website:</label> {{ club.website }}
      </p>
    </div>
    <div v-if="isAdmin" class="card-footer bg-light border-success">
      <button class="btn btn-warning" @click="goToEdit(club.id, club.name)">
        Edit
      </button>
      <button class="btn btn-danger" @click="openModal()">Delete</button>
      <button class="btn btn-secondary">View members</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  club: Object,
  isAdmin: Boolean,
});

const emit = defineEmits(["openDelete"]);

const router = useRouter();

const goToEdit = (clubId) => {
  router.push({
    name: "clubForm",
    params: { id: clubId },
  });
};

const openModal = () => {
  emit("openDelete", { clubId: props.club.id, name: props.club.name });
};
</script>

<style>
.card-header {
  display: flex;
  justify-content: center;
}

label {
  font-weight: bold;
}

.card-footer {
  display: flex;
  gap: 1rem;
}
</style>
